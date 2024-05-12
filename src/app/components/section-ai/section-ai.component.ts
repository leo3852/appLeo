import { Component, OnInit } from '@angular/core';
import { OpenaiService } from 'src/app/openai.service';

@Component({
  selector: 'app-section-ai',
  templateUrl: './section-ai.component.html',
  styleUrls: ['./section-ai.component.scss']
})
export class SectionAiComponent implements OnInit {

  textoGenerado: string | undefined ;

  constructor(private openaiService: OpenaiService) { }

  ngOnInit(): void {
    // this.openaiService.generarTexto("Una vez en un reino muy lejano, ").subscribe(
    //   { next: (v) => console.log(v),
    //     error: (e) => console.error(e),
    //     complete: () => console.info('complete') }
    // );

  }

}
