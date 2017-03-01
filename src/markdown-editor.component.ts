import { Component, Input, Output, EventEmitter } from '@angular/core';


/**
 * MarkdownEditorComponent
 *
 * @export
 * @class MarkdownEditorComponent
 */
@Component({
  selector: 'markdown-editor',
  templateUrl: 'markdown-editor.component.html'
})
export class MarkdownEditorComponent {

  @Input() model: string;
  @Output() modelChange: EventEmitter<string> = new EventEmitter<string>();
}
