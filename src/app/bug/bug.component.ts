import { Component } from '@angular/core';

@Component({
  selector: 'app-bug',
  template: `
    <p>WebView:</p>
    <webview
      webpreferences="javascript=no"
      allowpopups
      [attr.src]="'data:text/html;charset=utf-8,' + bugString"></webview>
  `
})
export class BugComponent {
}