(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["async.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(env.getFilter("getContents").call(context, runtime.contextOrFrameLookup(context, frame, "tmpl")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-inherit.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("base.njk", true, "base-inherit.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
context.getSuper(env, "block1", b_block1, frame, runtime, function(t_6,hole_0) {
if(t_6) { cb(t_6); return; }
hole_0 = runtime.markSafe(hole_0);
output += "*";
output += runtime.suppressValue(hole_0, env.opts.autoescape);
output += "*";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-set-and-show.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "parent";
frame.set("var", t_1, true);
if(frame.topLevel) {
context.setVariable("var", t_1);
}
if(frame.topLevel) {
context.addExport("var", t_1);
}
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
output += t_2;
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "var"), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 27;
var output = "";
try {
var frame = frame.push(true);
var t_4;
t_4 = "inner";
frame.set("var", t_4, true);
if(frame.topLevel) {
context.setVariable("var", t_4);
}
if(frame.topLevel) {
context.addExport("var", t_4);
}
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-set-inside-block.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
var t_3;
t_3 = "inner";
frame.set("var", t_3, true);
if(frame.topLevel) {
context.setVariable("var", t_3);
}
if(frame.topLevel) {
context.addExport("var", t_3);
}
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-set-wraps-block.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = (function() {
var output = "";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("somevar"))(env, context, frame, runtime, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
output += t_2;
});
return output;
})()
;
frame.set("somevar", t_1, true);
if(frame.topLevel) {
context.setVariable("somevar", t_1);
}
if(frame.topLevel) {
context.addExport("somevar", t_1);
}
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "somevar"), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-set.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "parent";
frame.set("var", t_1, true);
if(frame.topLevel) {
context.setVariable("var", t_1);
}
if(frame.topLevel) {
context.addExport("var", t_1);
}
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
output += t_2;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 27;
var output = "";
try {
var frame = frame.push(true);
var t_4;
t_4 = "inner";
frame.set("var", t_4, true);
if(frame.topLevel) {
context.setVariable("var", t_4);
}
if(frame.topLevel) {
context.addExport("var", t_4);
}
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base-show.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("main"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_main(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "var"), env.opts.autoescape);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_main: b_main,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "Foo";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block2"))(env, context, frame, runtime, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
output += t_3;
output += "Fizzle";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 6;
var output = "";
try {
var frame = frame.push(true);
output += "Bar";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block2(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 41;
var output = "";
try {
var frame = frame.push(true);
output += "Baz";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
b_block2: b_block2,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base2.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
frame = frame.push();
var t_3 = [1,2];
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("item"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
});
}
}
frame = frame.pop();
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_item(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 26;
var output = "";
try {
var frame = frame.push(true);
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "item"), env.opts.autoescape);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_item: b_item,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["base3.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "<b>Foo</b>";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["broken-conditional-include.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(!runtime.contextOrFrameLookup(context, frame, "whatever")) {
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("throws.njk", false, "broken-conditional-include.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
});
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["broken-import.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("doesnotexist", false, "broken-import.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
context.setVariable("doesnotexist", t_1);
output += "\nstr = ";
output += runtime.suppressValue(env.getFilter("undefinedfilter").call(context, runtime.contextOrFrameLookup(context, frame, "str")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["filter-block.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "may the ";
output += runtime.suppressValue(env.getFilter("replace").call(context, (function() {
var output = "";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
});
return output;
})()
,"force","forth"), env.opts.autoescape);
output += " be with you\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 49;
var output = "";
try {
var frame = frame.push(true);
output += "bar";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["for-async-content.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "somecontenthere";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["import-context-set.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "FOO";
frame.set("bar", t_1, true);
if(frame.topLevel) {
context.setVariable("bar", t_1);
}
if(frame.topLevel) {
context.addExport("bar", t_1);
}
output += "\n\n";
output += "\n";
frame = frame.push();
var t_4 = [1];
if(t_4) {t_4 = runtime.fromIterator(t_4);
var t_3 = t_4.length;
for(var t_2=0; t_2 < t_4.length; t_2++) {
var t_5 = t_4[t_2];
frame.set("i", t_5);
frame.set("loop.index", t_2 + 1);
frame.set("loop.index0", t_2);
frame.set("loop.revindex", t_3 - t_2);
frame.set("loop.revindex0", t_3 - t_2 - 1);
frame.set("loop.first", t_2 === 0);
frame.set("loop.last", t_2 === t_3 - 1);
frame.set("loop.length", t_3);
output += "\n  ";
var t_6;
t_6 = "buzz";
frame.set("buzz", t_6, true);
if(frame.topLevel) {
context.setVariable("buzz", t_6);
}
if(frame.topLevel) {
context.addExport("buzz", t_6);
}
output += "\n";
;
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["import-context.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_2 = "";t_2 += "Here's ";
t_2 += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "bar"), env.opts.autoescape);
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("foo");
context.setVariable("foo", macro_t_1);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["import-macro-call-undefined-macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("macro-call-undefined-macro.njk", false, "import-macro-call-undefined-macro.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
t_1.getExported(function(t_3,t_1) {
if(t_3) { cb(t_3); return; }
context.setVariable("t", t_1);
output += "\n";
frame = frame.push();
var t_6 = runtime.contextOrFrameLookup(context, frame, "list");
if(t_6) {t_6 = runtime.fromIterator(t_6);
var t_5 = t_6.length;
for(var t_4=0; t_4 < t_6.length; t_4++) {
var t_7 = t_6[t_4];
frame.set("el", t_7);
frame.set("loop.index", t_4 + 1);
frame.set("loop.index0", t_4);
frame.set("loop.revindex", t_5 - t_4);
frame.set("loop.revindex0", t_5 - t_4 - 1);
frame.set("loop.first", t_4 === 0);
frame.set("loop.last", t_4 === t_5 - 1);
frame.set("loop.length", t_5);
output += "\n\t";
output += runtime.suppressValue((lineno = 2, colno = 19, runtime.callWrap(runtime.memberLookup((t_1),"defined_macro"), "t[\"defined_macro\"]", context, [])), env.opts.autoescape);
output += "\n";
;
}
}
frame = frame.pop();
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["import.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
[], 
[], 
function (kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
var t_2 = "";t_2 += "Here's a macro";
;
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("foo");
context.setVariable("foo", macro_t_1);
output += "\n\n";
var t_3;
t_3 = "baz";
frame.set("bar", t_3, true);
if(frame.topLevel) {
context.setVariable("bar", t_3);
}
if(frame.topLevel) {
context.addExport("bar", t_3);
}
output += "\n\n";
var macro_t_4 = runtime.makeMacro(
["el"], 
[], 
function (l_el, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("el", l_el);
var t_5 = "";t_5 += "<";
t_5 += runtime.suppressValue(l_el, env.opts.autoescape);
t_5 += ">";
t_5 += runtime.suppressValue((lineno = 4, colno = 39, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "caller"), "caller", context, [])), env.opts.autoescape);
t_5 += "</";
t_5 += runtime.suppressValue(l_el, env.opts.autoescape);
t_5 += ">";
;
frame = callerFrame;
return new runtime.SafeString(t_5);
});
context.addExport("wrap");
context.setVariable("wrap", macro_t_4);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["include-in-loop.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"index0"), env.opts.autoescape);
output += ",";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "loop")),"first"), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["include-set.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "var"), env.opts.autoescape);
var t_1;
t_1 = 2;
frame.set("var", t_1, true);
if(frame.topLevel) {
context.setVariable("var", t_1);
}
if(frame.topLevel) {
context.addExport("var", t_1);
}
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "var"), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["include.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "FooInclude ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["includeMany.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_24,t_23) {
if(t_24) { cb(t_24); return; }
callback(null,t_23);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_26,t_25) {
if(t_26) { cb(t_26); return; }
callback(null,t_25);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_28,t_27) {
if(t_28) { cb(t_28); return; }
callback(null,t_27);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_30,t_29) {
if(t_30) { cb(t_30); return; }
callback(null,t_29);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_32,t_31) {
if(t_32) { cb(t_32); return; }
callback(null,t_31);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_34,t_33) {
if(t_34) { cb(t_34); return; }
callback(null,t_33);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_36,t_35) {
if(t_36) { cb(t_36); return; }
callback(null,t_35);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_38,t_37) {
if(t_38) { cb(t_38); return; }
callback(null,t_37);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_40,t_39) {
if(t_40) { cb(t_40); return; }
callback(null,t_39);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_42,t_41) {
if(t_42) { cb(t_42); return; }
callback(null,t_41);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_44,t_43) {
if(t_44) { cb(t_44); return; }
callback(null,t_43);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_46,t_45) {
if(t_46) { cb(t_46); return; }
callback(null,t_45);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_48,t_47) {
if(t_48) { cb(t_48); return; }
callback(null,t_47);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_50,t_49) {
if(t_50) { cb(t_50); return; }
callback(null,t_49);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_52,t_51) {
if(t_52) { cb(t_52); return; }
callback(null,t_51);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_54,t_53) {
if(t_54) { cb(t_54); return; }
callback(null,t_53);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_56,t_55) {
if(t_56) { cb(t_56); return; }
callback(null,t_55);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_58,t_57) {
if(t_58) { cb(t_58); return; }
callback(null,t_57);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_60,t_59) {
if(t_60) { cb(t_60); return; }
callback(null,t_59);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_62,t_61) {
if(t_62) { cb(t_62); return; }
callback(null,t_61);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_64,t_63) {
if(t_64) { cb(t_64); return; }
callback(null,t_63);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_66,t_65) {
if(t_66) { cb(t_66); return; }
callback(null,t_65);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_68,t_67) {
if(t_68) { cb(t_68); return; }
callback(null,t_67);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_70,t_69) {
if(t_70) { cb(t_70); return; }
callback(null,t_69);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_72,t_71) {
if(t_72) { cb(t_72); return; }
callback(null,t_71);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_74,t_73) {
if(t_74) { cb(t_74); return; }
callback(null,t_73);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_76,t_75) {
if(t_76) { cb(t_76); return; }
callback(null,t_75);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_78,t_77) {
if(t_78) { cb(t_78); return; }
callback(null,t_77);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_80,t_79) {
if(t_80) { cb(t_80); return; }
callback(null,t_79);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_82,t_81) {
if(t_82) { cb(t_82); return; }
callback(null,t_81);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_84,t_83) {
if(t_84) { cb(t_84); return; }
callback(null,t_83);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_86,t_85) {
if(t_86) { cb(t_86); return; }
callback(null,t_85);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_88,t_87) {
if(t_88) { cb(t_88); return; }
callback(null,t_87);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_90,t_89) {
if(t_90) { cb(t_90); return; }
callback(null,t_89);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_92,t_91) {
if(t_92) { cb(t_92); return; }
callback(null,t_91);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_94,t_93) {
if(t_94) { cb(t_94); return; }
callback(null,t_93);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_96,t_95) {
if(t_96) { cb(t_96); return; }
callback(null,t_95);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_98,t_97) {
if(t_98) { cb(t_98); return; }
callback(null,t_97);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_100,t_99) {
if(t_100) { cb(t_100); return; }
callback(null,t_99);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_102,t_101) {
if(t_102) { cb(t_102); return; }
callback(null,t_101);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_104,t_103) {
if(t_104) { cb(t_104); return; }
callback(null,t_103);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_106,t_105) {
if(t_106) { cb(t_106); return; }
callback(null,t_105);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_108,t_107) {
if(t_108) { cb(t_108); return; }
callback(null,t_107);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_110,t_109) {
if(t_110) { cb(t_110); return; }
callback(null,t_109);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_112,t_111) {
if(t_112) { cb(t_112); return; }
callback(null,t_111);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_114,t_113) {
if(t_114) { cb(t_114); return; }
callback(null,t_113);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_116,t_115) {
if(t_116) { cb(t_116); return; }
callback(null,t_115);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_118,t_117) {
if(t_118) { cb(t_118); return; }
callback(null,t_117);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_120,t_119) {
if(t_120) { cb(t_120); return; }
callback(null,t_119);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_122,t_121) {
if(t_122) { cb(t_122); return; }
callback(null,t_121);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_124,t_123) {
if(t_124) { cb(t_124); return; }
callback(null,t_123);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_126,t_125) {
if(t_126) { cb(t_126); return; }
callback(null,t_125);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_128,t_127) {
if(t_128) { cb(t_128); return; }
callback(null,t_127);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_130,t_129) {
if(t_130) { cb(t_130); return; }
callback(null,t_129);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_132,t_131) {
if(t_132) { cb(t_132); return; }
callback(null,t_131);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_134,t_133) {
if(t_134) { cb(t_134); return; }
callback(null,t_133);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_136,t_135) {
if(t_136) { cb(t_136); return; }
callback(null,t_135);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_138,t_137) {
if(t_138) { cb(t_138); return; }
callback(null,t_137);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_140,t_139) {
if(t_140) { cb(t_140); return; }
callback(null,t_139);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_142,t_141) {
if(t_142) { cb(t_142); return; }
callback(null,t_141);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_144,t_143) {
if(t_144) { cb(t_144); return; }
callback(null,t_143);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_146,t_145) {
if(t_146) { cb(t_146); return; }
callback(null,t_145);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_148,t_147) {
if(t_148) { cb(t_148); return; }
callback(null,t_147);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_150,t_149) {
if(t_150) { cb(t_150); return; }
callback(null,t_149);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_152,t_151) {
if(t_152) { cb(t_152); return; }
callback(null,t_151);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_154,t_153) {
if(t_154) { cb(t_154); return; }
callback(null,t_153);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_156,t_155) {
if(t_156) { cb(t_156); return; }
callback(null,t_155);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_158,t_157) {
if(t_158) { cb(t_158); return; }
callback(null,t_157);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_160,t_159) {
if(t_160) { cb(t_160); return; }
callback(null,t_159);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_162,t_161) {
if(t_162) { cb(t_162); return; }
callback(null,t_161);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_164,t_163) {
if(t_164) { cb(t_164); return; }
callback(null,t_163);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_166,t_165) {
if(t_166) { cb(t_166); return; }
callback(null,t_165);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_168,t_167) {
if(t_168) { cb(t_168); return; }
callback(null,t_167);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_170,t_169) {
if(t_170) { cb(t_170); return; }
callback(null,t_169);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_172,t_171) {
if(t_172) { cb(t_172); return; }
callback(null,t_171);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_174,t_173) {
if(t_174) { cb(t_174); return; }
callback(null,t_173);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_176,t_175) {
if(t_176) { cb(t_176); return; }
callback(null,t_175);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_178,t_177) {
if(t_178) { cb(t_178); return; }
callback(null,t_177);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_180,t_179) {
if(t_180) { cb(t_180); return; }
callback(null,t_179);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_182,t_181) {
if(t_182) { cb(t_182); return; }
callback(null,t_181);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_184,t_183) {
if(t_184) { cb(t_184); return; }
callback(null,t_183);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_186,t_185) {
if(t_186) { cb(t_186); return; }
callback(null,t_185);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_188,t_187) {
if(t_188) { cb(t_188); return; }
callback(null,t_187);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_190,t_189) {
if(t_190) { cb(t_190); return; }
callback(null,t_189);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_192,t_191) {
if(t_192) { cb(t_192); return; }
callback(null,t_191);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_194,t_193) {
if(t_194) { cb(t_194); return; }
callback(null,t_193);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_196,t_195) {
if(t_196) { cb(t_196); return; }
callback(null,t_195);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_198,t_197) {
if(t_198) { cb(t_198); return; }
callback(null,t_197);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_200,t_199) {
if(t_200) { cb(t_200); return; }
callback(null,t_199);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_202,t_201) {
if(t_202) { cb(t_202); return; }
callback(null,t_201);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_204,t_203) {
if(t_204) { cb(t_204); return; }
callback(null,t_203);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_206,t_205) {
if(t_206) { cb(t_206); return; }
callback(null,t_205);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_208,t_207) {
if(t_208) { cb(t_208); return; }
callback(null,t_207);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_210,t_209) {
if(t_210) { cb(t_210); return; }
callback(null,t_209);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_212,t_211) {
if(t_212) { cb(t_212); return; }
callback(null,t_211);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_214,t_213) {
if(t_214) { cb(t_214); return; }
callback(null,t_213);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_216,t_215) {
if(t_216) { cb(t_216); return; }
callback(null,t_215);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_218,t_217) {
if(t_218) { cb(t_218); return; }
callback(null,t_217);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_220,t_219) {
if(t_220) { cb(t_220); return; }
callback(null,t_219);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_222,t_221) {
if(t_222) { cb(t_222); return; }
callback(null,t_221);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_224,t_223) {
if(t_224) { cb(t_224); return; }
callback(null,t_223);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_226,t_225) {
if(t_226) { cb(t_226); return; }
callback(null,t_225);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_228,t_227) {
if(t_228) { cb(t_228); return; }
callback(null,t_227);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_230,t_229) {
if(t_230) { cb(t_230); return; }
callback(null,t_229);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_232,t_231) {
if(t_232) { cb(t_232); return; }
callback(null,t_231);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_234,t_233) {
if(t_234) { cb(t_234); return; }
callback(null,t_233);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_236,t_235) {
if(t_236) { cb(t_236); return; }
callback(null,t_235);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_238,t_237) {
if(t_238) { cb(t_238); return; }
callback(null,t_237);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_240,t_239) {
if(t_240) { cb(t_240); return; }
callback(null,t_239);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_242,t_241) {
if(t_242) { cb(t_242); return; }
callback(null,t_241);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_244,t_243) {
if(t_244) { cb(t_244); return; }
callback(null,t_243);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_246,t_245) {
if(t_246) { cb(t_246); return; }
callback(null,t_245);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_248,t_247) {
if(t_248) { cb(t_248); return; }
callback(null,t_247);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_250,t_249) {
if(t_250) { cb(t_250); return; }
callback(null,t_249);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_252,t_251) {
if(t_252) { cb(t_252); return; }
callback(null,t_251);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_254,t_253) {
if(t_254) { cb(t_254); return; }
callback(null,t_253);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_256,t_255) {
if(t_256) { cb(t_256); return; }
callback(null,t_255);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_258,t_257) {
if(t_258) { cb(t_258); return; }
callback(null,t_257);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_260,t_259) {
if(t_260) { cb(t_260); return; }
callback(null,t_259);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_262,t_261) {
if(t_262) { cb(t_262); return; }
callback(null,t_261);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_264,t_263) {
if(t_264) { cb(t_264); return; }
callback(null,t_263);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_266,t_265) {
if(t_266) { cb(t_266); return; }
callback(null,t_265);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_268,t_267) {
if(t_268) { cb(t_268); return; }
callback(null,t_267);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_270,t_269) {
if(t_270) { cb(t_270); return; }
callback(null,t_269);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_272,t_271) {
if(t_272) { cb(t_272); return; }
callback(null,t_271);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_274,t_273) {
if(t_274) { cb(t_274); return; }
callback(null,t_273);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_276,t_275) {
if(t_276) { cb(t_276); return; }
callback(null,t_275);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_278,t_277) {
if(t_278) { cb(t_278); return; }
callback(null,t_277);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_280,t_279) {
if(t_280) { cb(t_280); return; }
callback(null,t_279);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_282,t_281) {
if(t_282) { cb(t_282); return; }
callback(null,t_281);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_284,t_283) {
if(t_284) { cb(t_284); return; }
callback(null,t_283);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_286,t_285) {
if(t_286) { cb(t_286); return; }
callback(null,t_285);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_288,t_287) {
if(t_288) { cb(t_288); return; }
callback(null,t_287);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_290,t_289) {
if(t_290) { cb(t_290); return; }
callback(null,t_289);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_292,t_291) {
if(t_292) { cb(t_292); return; }
callback(null,t_291);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_294,t_293) {
if(t_294) { cb(t_294); return; }
callback(null,t_293);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_296,t_295) {
if(t_296) { cb(t_296); return; }
callback(null,t_295);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_298,t_297) {
if(t_298) { cb(t_298); return; }
callback(null,t_297);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_300,t_299) {
if(t_300) { cb(t_300); return; }
callback(null,t_299);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_302,t_301) {
if(t_302) { cb(t_302); return; }
callback(null,t_301);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_304,t_303) {
if(t_304) { cb(t_304); return; }
callback(null,t_303);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_306,t_305) {
if(t_306) { cb(t_306); return; }
callback(null,t_305);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_308,t_307) {
if(t_308) { cb(t_308); return; }
callback(null,t_307);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_310,t_309) {
if(t_310) { cb(t_310); return; }
callback(null,t_309);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_312,t_311) {
if(t_312) { cb(t_312); return; }
callback(null,t_311);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_314,t_313) {
if(t_314) { cb(t_314); return; }
callback(null,t_313);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_316,t_315) {
if(t_316) { cb(t_316); return; }
callback(null,t_315);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_318,t_317) {
if(t_318) { cb(t_318); return; }
callback(null,t_317);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_320,t_319) {
if(t_320) { cb(t_320); return; }
callback(null,t_319);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_322,t_321) {
if(t_322) { cb(t_322); return; }
callback(null,t_321);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_324,t_323) {
if(t_324) { cb(t_324); return; }
callback(null,t_323);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_326,t_325) {
if(t_326) { cb(t_326); return; }
callback(null,t_325);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_328,t_327) {
if(t_328) { cb(t_328); return; }
callback(null,t_327);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_330,t_329) {
if(t_330) { cb(t_330); return; }
callback(null,t_329);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_332,t_331) {
if(t_332) { cb(t_332); return; }
callback(null,t_331);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_334,t_333) {
if(t_334) { cb(t_334); return; }
callback(null,t_333);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_336,t_335) {
if(t_336) { cb(t_336); return; }
callback(null,t_335);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_338,t_337) {
if(t_338) { cb(t_338); return; }
callback(null,t_337);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_340,t_339) {
if(t_340) { cb(t_340); return; }
callback(null,t_339);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_342,t_341) {
if(t_342) { cb(t_342); return; }
callback(null,t_341);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_344,t_343) {
if(t_344) { cb(t_344); return; }
callback(null,t_343);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_346,t_345) {
if(t_346) { cb(t_346); return; }
callback(null,t_345);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_348,t_347) {
if(t_348) { cb(t_348); return; }
callback(null,t_347);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_350,t_349) {
if(t_350) { cb(t_350); return; }
callback(null,t_349);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_352,t_351) {
if(t_352) { cb(t_352); return; }
callback(null,t_351);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_354,t_353) {
if(t_354) { cb(t_354); return; }
callback(null,t_353);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_356,t_355) {
if(t_356) { cb(t_356); return; }
callback(null,t_355);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_358,t_357) {
if(t_358) { cb(t_358); return; }
callback(null,t_357);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_360,t_359) {
if(t_360) { cb(t_360); return; }
callback(null,t_359);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_362,t_361) {
if(t_362) { cb(t_362); return; }
callback(null,t_361);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_364,t_363) {
if(t_364) { cb(t_364); return; }
callback(null,t_363);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_366,t_365) {
if(t_366) { cb(t_366); return; }
callback(null,t_365);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_368,t_367) {
if(t_368) { cb(t_368); return; }
callback(null,t_367);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_370,t_369) {
if(t_370) { cb(t_370); return; }
callback(null,t_369);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_372,t_371) {
if(t_372) { cb(t_372); return; }
callback(null,t_371);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_374,t_373) {
if(t_374) { cb(t_374); return; }
callback(null,t_373);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_376,t_375) {
if(t_376) { cb(t_376); return; }
callback(null,t_375);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_378,t_377) {
if(t_378) { cb(t_378); return; }
callback(null,t_377);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_380,t_379) {
if(t_380) { cb(t_380); return; }
callback(null,t_379);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_382,t_381) {
if(t_382) { cb(t_382); return; }
callback(null,t_381);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_384,t_383) {
if(t_384) { cb(t_384); return; }
callback(null,t_383);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_386,t_385) {
if(t_386) { cb(t_386); return; }
callback(null,t_385);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_388,t_387) {
if(t_388) { cb(t_388); return; }
callback(null,t_387);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_390,t_389) {
if(t_390) { cb(t_390); return; }
callback(null,t_389);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_392,t_391) {
if(t_392) { cb(t_392); return; }
callback(null,t_391);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_394,t_393) {
if(t_394) { cb(t_394); return; }
callback(null,t_393);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_396,t_395) {
if(t_396) { cb(t_396); return; }
callback(null,t_395);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_398,t_397) {
if(t_398) { cb(t_398); return; }
callback(null,t_397);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_400,t_399) {
if(t_400) { cb(t_400); return; }
callback(null,t_399);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_402,t_401) {
if(t_402) { cb(t_402); return; }
callback(null,t_401);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_404,t_403) {
if(t_404) { cb(t_404); return; }
callback(null,t_403);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_406,t_405) {
if(t_406) { cb(t_406); return; }
callback(null,t_405);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_408,t_407) {
if(t_408) { cb(t_408); return; }
callback(null,t_407);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_410,t_409) {
if(t_410) { cb(t_410); return; }
callback(null,t_409);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_412,t_411) {
if(t_412) { cb(t_412); return; }
callback(null,t_411);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_414,t_413) {
if(t_414) { cb(t_414); return; }
callback(null,t_413);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_416,t_415) {
if(t_416) { cb(t_416); return; }
callback(null,t_415);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_418,t_417) {
if(t_418) { cb(t_418); return; }
callback(null,t_417);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_420,t_419) {
if(t_420) { cb(t_420); return; }
callback(null,t_419);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_422,t_421) {
if(t_422) { cb(t_422); return; }
callback(null,t_421);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_424,t_423) {
if(t_424) { cb(t_424); return; }
callback(null,t_423);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_426,t_425) {
if(t_426) { cb(t_426); return; }
callback(null,t_425);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_428,t_427) {
if(t_428) { cb(t_428); return; }
callback(null,t_427);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_430,t_429) {
if(t_430) { cb(t_430); return; }
callback(null,t_429);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_432,t_431) {
if(t_432) { cb(t_432); return; }
callback(null,t_431);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_434,t_433) {
if(t_434) { cb(t_434); return; }
callback(null,t_433);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_436,t_435) {
if(t_436) { cb(t_436); return; }
callback(null,t_435);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_438,t_437) {
if(t_438) { cb(t_438); return; }
callback(null,t_437);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_440,t_439) {
if(t_440) { cb(t_440); return; }
callback(null,t_439);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_442,t_441) {
if(t_442) { cb(t_442); return; }
callback(null,t_441);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_444,t_443) {
if(t_444) { cb(t_444); return; }
callback(null,t_443);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_446,t_445) {
if(t_446) { cb(t_446); return; }
callback(null,t_445);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_448,t_447) {
if(t_448) { cb(t_448); return; }
callback(null,t_447);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_450,t_449) {
if(t_450) { cb(t_450); return; }
callback(null,t_449);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_452,t_451) {
if(t_452) { cb(t_452); return; }
callback(null,t_451);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_454,t_453) {
if(t_454) { cb(t_454); return; }
callback(null,t_453);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_456,t_455) {
if(t_456) { cb(t_456); return; }
callback(null,t_455);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_458,t_457) {
if(t_458) { cb(t_458); return; }
callback(null,t_457);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_460,t_459) {
if(t_460) { cb(t_460); return; }
callback(null,t_459);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_462,t_461) {
if(t_462) { cb(t_462); return; }
callback(null,t_461);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_464,t_463) {
if(t_464) { cb(t_464); return; }
callback(null,t_463);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_466,t_465) {
if(t_466) { cb(t_466); return; }
callback(null,t_465);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_468,t_467) {
if(t_468) { cb(t_468); return; }
callback(null,t_467);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_470,t_469) {
if(t_470) { cb(t_470); return; }
callback(null,t_469);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_472,t_471) {
if(t_472) { cb(t_472); return; }
callback(null,t_471);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_474,t_473) {
if(t_474) { cb(t_474); return; }
callback(null,t_473);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_476,t_475) {
if(t_476) { cb(t_476); return; }
callback(null,t_475);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_478,t_477) {
if(t_478) { cb(t_478); return; }
callback(null,t_477);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_480,t_479) {
if(t_480) { cb(t_480); return; }
callback(null,t_479);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_482,t_481) {
if(t_482) { cb(t_482); return; }
callback(null,t_481);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_484,t_483) {
if(t_484) { cb(t_484); return; }
callback(null,t_483);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_486,t_485) {
if(t_486) { cb(t_486); return; }
callback(null,t_485);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_488,t_487) {
if(t_488) { cb(t_488); return; }
callback(null,t_487);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_490,t_489) {
if(t_490) { cb(t_490); return; }
callback(null,t_489);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_492,t_491) {
if(t_492) { cb(t_492); return; }
callback(null,t_491);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_494,t_493) {
if(t_494) { cb(t_494); return; }
callback(null,t_493);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_496,t_495) {
if(t_496) { cb(t_496); return; }
callback(null,t_495);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_498,t_497) {
if(t_498) { cb(t_498); return; }
callback(null,t_497);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_500,t_499) {
if(t_500) { cb(t_500); return; }
callback(null,t_499);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_502,t_501) {
if(t_502) { cb(t_502); return; }
callback(null,t_501);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_504,t_503) {
if(t_504) { cb(t_504); return; }
callback(null,t_503);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_506,t_505) {
if(t_506) { cb(t_506); return; }
callback(null,t_505);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_508,t_507) {
if(t_508) { cb(t_508); return; }
callback(null,t_507);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_510,t_509) {
if(t_510) { cb(t_510); return; }
callback(null,t_509);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_512,t_511) {
if(t_512) { cb(t_512); return; }
callback(null,t_511);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_514,t_513) {
if(t_514) { cb(t_514); return; }
callback(null,t_513);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_516,t_515) {
if(t_516) { cb(t_516); return; }
callback(null,t_515);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("include.njk", false, "includeMany.njk", false, function(t_518,t_517) {
if(t_518) { cb(t_518); return; }
callback(null,t_517);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_520,t_519) {
if(t_520) { cb(t_520); return; }
callback(null,t_519);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["item.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "showing ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "item"), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["macro-call-undefined-macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var macro_t_1 = runtime.makeMacro(
["useless"], 
[], 
function (l_useless, kwargs) {
var callerFrame = frame;
frame = new runtime.Frame();
kwargs = kwargs || {};
if (Object.prototype.hasOwnProperty.call(kwargs, "caller")) {
frame.set("caller", kwargs.caller); }
frame.set("useless", l_useless);
var t_2 = "";t_2 += "\n\t";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("undefined-macro.njk", false, "macro-call-undefined-macro.njk", false, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(result, callback){
t_2 += result;
callback(null);
});
env.waterfall(tasks, function(){
t_2 += "\n";
});
frame = callerFrame;
return new runtime.SafeString(t_2);
});
context.addExport("defined_macro");
context.setVariable("defined_macro", macro_t_1);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/dir1/index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./macros.njk", false, "relative/dir1/index.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/dir1/macros.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "Test1";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/dir2/index.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./macros.njk", false, "relative/dir2/index.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/dir2/macros.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "Test2";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/test-cache.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./dir1/index.njk", false, "relative/test-cache.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("./dir2/index.njk", false, "relative/test-cache.njk", false, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
callback(null,t_5);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/test1.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("../base.njk", true, "relative/test1.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Test1";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["relative/test2.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("./test1.njk", true, "relative/test2.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("block1"))(env, context, frame, runtime, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
output += t_4;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_block1(env, context, frame, runtime, cb) {
var lineno = 2;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "Test2";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_block1: b_block1,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["set.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "mumble";
frame.set("foo", t_1, true);
if(frame.topLevel) {
context.setVariable("foo", t_1);
}
if(frame.topLevel) {
context.addExport("foo", t_1);
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["simple-base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("test"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_test(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_test: b_test,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["throws.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue((lineno = 0, colno = 16, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "nonExistentFn"), "nonExistentFn", context, [])), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["undefined-macro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += runtime.suppressValue((lineno = 0, colno = 8, runtime.callWrap(runtime.contextOrFrameLookup(context, frame, "undef"), "undef", context, [])), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
