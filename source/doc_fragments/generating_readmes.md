<!-- [README;API]:uncategorized -->
  
## Generating Readme Documentation

`README.md` files are generated from [*document fragment*](#document_fragment) comments 
found within the packages main source file, and HTML document fragments found within 
Markdown files in the `repo_root/source/doc_fragments`  directory and subdirectory.

**cfw.Doc** keeps track of the source of each fragment and will generate an icon
<img src="source/brand/go_to_source.svg" height="15" alt="go_to_fragment_source_icon"> 
that will link to the original source file. This can be found at the bottom-right of 
the fragment contents.

