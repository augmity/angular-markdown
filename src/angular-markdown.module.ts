import { NgModule } from '@angular/core';

import { MarkdownEditorComponent } from './markdown-editor.component';
import { MarkdownViewerComponent } from './markdown-viewer.component';

@NgModule({
  declarations: [
    MarkdownEditorComponent,
    MarkdownViewerComponent
  ],
  exports: [
    MarkdownEditorComponent,
    MarkdownViewerComponent
  ],
})
export class AngularMarkdownModule { }
