import { Component, Input } from '@angular/core';

const markdown = require('markdown-it');


/**
 * MarkdownViewerComponent
 *
 * @export
 * @class MarkdownViewerComponent
 */
@Component({
    selector: 'markdown-viewer',
    templateUrl: 'markdown-viewer.component.html'
})
export class MarkdownViewerComponent {

  @Input()
  set model(value: string) {
    if (value) {
      this.parsedModel = this.markdownParser.render(value);
    } else {
      this.parsedModel = '';
    }
  }
  parsedModel = '';
  markdownParser: any = new markdown({ linkify: true });
}
