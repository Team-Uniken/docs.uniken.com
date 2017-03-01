/*
var markdownpdf = require("markdown-pdf")


var mdDocs = [
	"verify.md"
]

var options = {
	cssPath: 'custom.css',
	highlightCssPath: './highlight.css',
}

var pdfDocs = mdDocs.map(function (d) { return "pdfs/" + d.replace(".md", ".pdf") })

markdownpdf(options).from(mdDocs).to(pdfDocs, function () {
  pdfDocs.forEach(function (d) { console.log("Created", d) })
})

*/

var yamp = require('yamp');
var options = {
	style:true
}
var pdf = new yamp.renderers.pdf();
var html = new yamp.renderers.html();

var mdDocs = [
	"verify.md"
]

html.renderFile(mdDocs[0], function(err){
    if (err) return console.log("Error while rendering: "+err);
    else console.log("HTML Rendering was successful");
});

pdf.renderFile(mdDocs[0], function(err){
    if (err) return console.log("Error while rendering: "+err);
    else console.log("PDF Rendering was successful");
});


