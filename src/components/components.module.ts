import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form';
import { QuestionSetFormComponent } from './question-set-form/question-set-form';
@NgModule({
	declarations: [ContactFormComponent,
    QuestionSetFormComponent],
	imports: [],
	exports: [ContactFormComponent,
    QuestionSetFormComponent]
})
export class ComponentsModule {}
