CodeMirror.defineMode("wick", (a, b) => ({
	startState: () => ({ modes: [] }),
	expression: (str, st, default_val) =>{
		let flag = false;
		const modes = st.modes;
		const last = st.modes.length-1;


		if(str.match("`")){
			modes.push("template-literal");
			return "string"
		}

		if(str.match(/\"[^\"\$]*\"/) || str.match(/\'[\W\w\s]*\'/))
			return "string";

		if(str.match(/[\-]?\d([eE][\-\+]?\d)?/))
			return "number";

		if(str.match(/[\{\}\[\]\(\)]/))
			return "bracket";

		if(str.match(/[\<\>\+\-\=\?\:\*\&\|]/))
			return "operator";

		str.next();
		return default_val;
	},
	token: function(str, st) {
		let flag = false;
		const modes = st.modes;
		const last = st.modes.length-1;

		switch (modes[last]) {
			case "template-literal-middle":
				if(str.match("{", false))
					modes.push("template-literal-middle");
				if(str.match("}", false))
					modes.pop();
				return this.expression(str, st, "script-body");

			case "template-literal":
				if(str.match("${"))
					return (modes.push("template-literal-middle"), "bracket");
				if(str.match("`"))
					return (modes.pop(), "string");
				str.next();
				return "string";

			case "binding":
				if(str.match("))")) return  (modes.pop(), "wick-binding");
				return this.expression(str, st, "wick-binding-body");

			case "script":
				if(str.match("</")) 
					return (modes.splice(last-1,2, ["html-close-tag", "html-close-tag-name"]), "html-close-tag");
				return this.expression(str, st, "script-body");

			case "html-open-tag-name":
				flag = true;
			case "html-close-tag-name":
				const tag = str.match(/[a-zA-Z\-]+/);
				modes.pop();
				if(flag && tag == "script"){
					modes[last-1] = "html-script-tag-body"
				}
				return "html-tag-name";
			
			case "html-script-tag-body":
				if(str.match(">")) 
					return (modes.push("script"), "script");
				//intentional
			case "html-tag-body":
				if(str.match("((")) 
					return (modes.push("binding"), "wick-binding");
				if(str.match(">")) 
					return (modes.push("html-body"), "html-body");
				if(str.match("=")) 
					return "operator";
				str.next();
				return "html-tag-body"

			case "html-close-tag":
				if(str.next() == ">")
					modes.pop();
				return "html-tag"

			case "html-body":
				if(str.match("((")) 
					return (modes.push("binding"), "wick-binding");
				if(str.match("</")) 
					return (modes.splice(last-1,2, ["html-close-tag", "html-close-tag-name"]), "html-close-tag");
					str.next();
				if(str.match("<"))
					return (modes.push("html-tag-body", "html-open-tag-name"), "html-tag");
				return "html-body"
			
			default: //HTML Start/Body

				switch (str.next()) {
					case "<":
						return modes.push("html-tag-body", "html-open-tag-name"), "html-tag";
				}
				return "html-tag"
		}

		
	}
}))

radiate({ custom: { cm: CodeMirror } });