import { DemoNoteBaseModel } from 'src/app/genmodel/demo_note_base.model';
export class DemoNoteModel implements DemoNoteBaseModel{
	id: number;
	title: string;
	text: string;
	date: Date;
}
