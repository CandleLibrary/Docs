wick.plugin(wick.plugin.element, "comment", function(ele, lex){
	
	const marker = lex.copy();
	const end = lex.copy();

	while(!end.END && end.ty !== end.types.nl) end.next();

	console.log(end.slice(marker));
})