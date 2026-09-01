import { Component } from '@angular/core';
import { I18nText, UI } from '../../i18n/i18n';
import { LanguageService } from '../../services/language.service';

export interface CodeLine {
  text: string;
  /** Number of the annotation this line belongs to, if any. */
  note?: number;
}

export interface Annotation {
  n: number;
  title: I18nText;
  body: I18nText;
}

interface CodeSample {
  file: string;
  lines: CodeLine[];
  notes: Annotation[];
}

export interface Practice {
  title: I18nText;
  body: I18nText;
}

type TabId = 'draft' | 'shipped';

const PRACTICES: Practice[] = [
  {
    title: { en: 'Small PRs, real reviews', es: 'PRs chicos, revisiones de verdad' },
    body: {
      en:
        'I keep pull requests small enough to actually review, and AI-written code clears exactly ' +
        'the same bar as anything I type myself. Nothing merges on the strength of “it looked right”.',
      es:
        'Mantengo los pull requests lo bastante chicos como para poder revisarlos en serio, y el ' +
        'código escrito por IA pasa exactamente por la misma vara que el que escribo yo. Nada se ' +
        'mergea porque “se veía bien”.'
    }
  },
  {
    title: { en: 'Azure DevOps end to end', es: 'Azure DevOps de punta a punta' },
    body: {
      en:
        'Repos, branch policies and pipelines: builds, tests and gates that block a merge. Quality ' +
        'enforced by the pipeline rather than left to whoever happens to be reviewing that day.',
      es:
        'Repos, políticas de rama y pipelines: builds, tests y gates que bloquean el merge. La ' +
        'calidad la exige el pipeline, no queda librada a quién esté revisando ese día.'
    }
  },
  {
    title: { en: 'Context is a budget', es: 'El contexto es un presupuesto' },
    body: {
      en:
        'Tokens cost time and money, so I scope context instead of dumping the repo into the ' +
        'prompt, reach for the smallest model that can do the job, and save the long runs for ' +
        'problems that need them. Often a grep answers faster, and cheaper, than a prompt.',
      es:
        'Los tokens cuestan tiempo y dinero: acoto el contexto en vez de volcar el repo entero en ' +
        'el prompt, uso el modelo más chico que resuelva la tarea y reservo las corridas largas ' +
        'para los problemas que las necesitan. Muchas veces un grep responde más rápido, y más ' +
        'barato, que una consulta.'
    }
  }
];

const DRAFT: CodeSample = {
  file: 'OrdersController.cs',
  lines: [
    { text: '[HttpGet("orders")]' },
    { text: 'public async Task<IActionResult> GetOrders(int userId)', note: 1 },
    { text: '{' },
    { text: '    var orders = _db.Orders' },
    { text: '        .Where(o => o.UserId == userId)' },
    { text: '        .ToList();', note: 2 },
    { text: '' },
    { text: '    foreach (var order in orders)', note: 3 },
    { text: '        order.Items = _db.OrderItems' },
    { text: '            .Where(i => i.OrderId == order.Id).ToList();' },
    { text: '' },
    { text: '    return Ok(orders);', note: 4 },
    { text: '}' }
  ],
  notes: [
    {
      n: 1,
      title: {
        en: 'Anyone can read anyone’s orders',
        es: 'Cualquiera puede leer los pedidos de cualquiera'
      },
      body: {
        en: 'The id arrives from the caller and is trusted as-is. Change the number in the URL and you get someone else’s data.',
        es: 'El id llega desde el cliente y se confía tal cual. Cambiás el número en la URL y obtenés los datos de otra persona.'
      }
    },
    {
      n: 2,
      title: { en: 'Async in name only', es: 'Async solo de nombre' },
      body: {
        en: 'ToList() is synchronous, so the method blocks a thread pool thread while it waits. There is also no cancellation token: the query keeps running after the client hangs up.',
        es: 'ToList() es sincrónico, así que el método bloquea un hilo del pool mientras espera. Tampoco hay cancellation token: la consulta sigue corriendo después de que el cliente cortó.'
      }
    },
    {
      n: 3,
      title: { en: 'N+1 queries', es: 'Consultas N+1' },
      body: {
        en: 'One round trip for the orders, then one more per order. Fifty orders means fifty-one trips to the database.',
        es: 'Una ida a la base por los pedidos, y una más por cada pedido. Cincuenta pedidos son cincuenta y una consultas.'
      }
    },
    {
      n: 4,
      title: { en: 'Entities straight to the wire', es: 'Entidades directo al JSON' },
      body: {
        en: 'The database model becomes the public contract. Every column ships, and renaming one becomes a breaking API change.',
        es: 'El modelo de base de datos se vuelve el contrato público. Viaja cada columna, y renombrar una rompe la API.'
      }
    }
  ]
};

const SHIPPED: CodeSample = {
  file: 'OrdersController.cs',
  lines: [
    { text: '[HttpGet("orders")]' },
    { text: '[Authorize]', note: 1 },
    { text: 'public async Task<ActionResult<IReadOnlyList<OrderDto>>> GetOrders(' },
    { text: '    CancellationToken ct)', note: 2 },
    { text: '{' },
    { text: '    var userId = User.GetId();', note: 1 },
    { text: '' },
    { text: '    var orders = await _db.Orders' },
    { text: '        .AsNoTracking()' },
    { text: '        .Where(o => o.UserId == userId)' },
    { text: '        .Select(o => new OrderDto(', note: 4 },
    { text: '            o.Id,' },
    { text: '            o.PlacedAt,' },
    { text: '            o.Items.Select(i => new OrderItemDto(i.Sku, i.Quantity))))', note: 3 },
    { text: '        .ToListAsync(ct);', note: 2 },
    { text: '' },
    { text: '    return Ok(orders);' },
    { text: '}' }
  ],
  notes: [
    {
      n: 1,
      title: { en: 'Identity comes from the token', es: 'La identidad viene del token' },
      body: {
        en: 'The endpoint requires authentication and reads the user from the validated claims, so the caller cannot ask for someone else.',
        es: 'El endpoint exige autenticación y toma el usuario de los claims validados, así que quien llama no puede pedir por otro.'
      }
    },
    {
      n: 2,
      title: { en: 'Actually async, and cancellable', es: 'Async de verdad, y cancelable' },
      body: {
        en: 'ToListAsync frees the thread while the database works, and the cancellation token flows all the way down so abandoned requests stop costing money.',
        es: 'ToListAsync libera el hilo mientras trabaja la base, y el cancellation token baja hasta el fondo para que las requests abandonadas dejen de costar.'
      }
    },
    {
      n: 3,
      title: { en: 'One query instead of fifty-one', es: 'Una consulta en vez de cincuenta y una' },
      body: {
        en: 'The items are projected inside the same statement, so EF Core translates the whole thing into a single round trip.',
        es: 'Los ítems se proyectan dentro de la misma sentencia, así que EF Core lo traduce todo a una sola ida a la base.'
      }
    },
    {
      n: 4,
      title: { en: 'A DTO defines the contract', es: 'Un DTO define el contrato' },
      body: {
        en: 'The projection is the API surface. Entities stay in the data layer, and the schema can change without breaking clients.',
        es: 'La proyección es la superficie de la API. Las entidades quedan en la capa de datos y el esquema puede cambiar sin romper clientes.'
      }
    }
  ]
};

@Component({
  selector: 'app-ai-approach',
  templateUrl: './ai-approach.component.html',
  styleUrls: ['./ai-approach.component.scss']
})
export class AiApproachComponent {
  readonly ui = UI;
  readonly practices = PRACTICES;

  readonly tabs: { id: TabId; label: I18nText }[] = [
    { id: 'draft', label: UI.tabDraft },
    { id: 'shipped', label: UI.tabShipped }
  ];

  activeTab: TabId = 'draft';

  /** Annotation currently hovered or focused, highlighted in the code. */
  activeNote: number | null = null;

  constructor(public lang: LanguageService) {}

  get sample(): CodeSample {
    return this.activeTab === 'draft' ? DRAFT : SHIPPED;
  }

  selectTab(id: TabId): void {
    this.activeTab = id;
    this.activeNote = null;
  }
}
