### MarkdownChecker
a script that generates a JSON file from the markdown which contains status of proposals.   

#### modules
this script consist of three main stage like other compilers have
- parser
- analyzer
- transformer
- generator

##### Parser
- **_readMarkdown_** : `string`
  - source file will be parsed as an AST
- **_parseToAST_** : `object`
  - an AST representation of the markdown

##### Analyzer
- **_collectLinkDefinitions_** : `object`
  - detects all link definitions declared from bottom of the markdown file and returns these definitions
- **_detectTables_** : `object`
  - extracts all of the tables from the markdown and returns it as a tree
- **_detectHeaders_** : `object`
  - extracts all of the row from the table nodes and returns it as a tree

##### Transformer
- **_traverser_** 
  - takes current node as an input if it has an children nodes then applies the logic with given callback functions and returns something declared in the callback function

##### Generator