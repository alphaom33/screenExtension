import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	// Only allow a single Cat Coder
	let currentPanel: vscode.WebviewPanel | undefined = undefined;
	context.subscriptions.push(
	  vscode.commands.registerCommand('catCoding.start', () => {

		if (currentPanel) {
		  currentPanel.reveal(vscode.ViewColumn.One);
		} else {
		  currentPanel = vscode.window.createWebviewPanel(
			'catCoding',
			'Cat Coding',
			vscode.ViewColumn.One,
			{
			  enableScripts: true
			}
		  );
		  const code = currentPanel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'src', 'help.js'));
		  const otherThingy = currentPanel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'src', 'help.css'));
		  const thingy = currentPanel.webview.asWebviewUri(vscode.Uri.joinPath(context.extensionUri, 'data', 'yes.txt'));
		  currentPanel.webview.html = getWebviewContent(code, thingy, otherThingy);
		  currentPanel.onDidDispose(
			() => {
			  currentPanel = undefined;
			},
			undefined,
			context.subscriptions
		  );
		}


	  })
	);
  
	// Our new command
	context.subscriptions.push(
	  vscode.commands.registerCommand('catCoding.doRefactor', () => {
		if (!currentPanel) {
		  return;
		}
  
		// Send a message to our webview.
		// You can send any JSON serializable data.
		currentPanel.webview.postMessage({ command: 'refactor' });
	  })
	);
  }
  
  function getWebviewContent(code: vscode.Uri, noncode: vscode.Uri, spreadSheet: vscode.Uri) {
	return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
	  <link rel="stylesheet" href=${spreadSheet}>
  </head>
  <body>
  	  <h1 id="debug"></h1>
	  <canvas id="canvas" width="640" height="260" />
	  <script id="code" src=${code} url=${noncode} />
  </body>
  </html>`;
  }