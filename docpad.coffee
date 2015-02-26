# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	  plugins:
    tags:
      extension: '.html'
      injectDocumentHelper: (doc) ->
        doc.setMeta {layout: 'tags'}
}

# Export the DocPad Configuration
module.exports = docpadConfig
