const colors = require('./colors');

const comments = {
    name: "Comment",
    scope: [
        "comment",
        "meta.separator",
        "markup.quote",
        "unused.comment",
        "wildcard.comment"
    ],
    settings: {
        "fontStyle": "italic",
        "foreground": colors.tokens.comments
    }
};

const docComments = {
    name: "Doc Comment",
    scope: [
        "comment.block.documentation.js storage.type.class.doc",
        "comment.block.documentation.js storage.type.class.jsdoc"
    ],
    settings: {
        fontStyle: "bold italic",
        foreground: colors.tokens.docComments
    }
};

const specials = {
    name: "this",
    scope: [
        "variable.language.arguments",
        "variable.language.constructor",
        "variable.language.prototype",
        "variable.language.rust",
        "variable.language.this",
        "variable.language.super"
    ],
    settings: {
        fontStyle: "italic",
        foreground: colors.tokens.specials
    }
};

const blues = {
    name: "Blue",
    scope: [
        "entity.name.accessor.js",
        "entity.name.function",
        "entity.name.function.method.js",
        "entity.other.attribute-name.id",
        "keyword.other.special-method",
        "meta.diff.header.git",
        "meta.function-call.object.php",
        "meta.function-call.php",
        "meta.function-call.static.php",
        "meta.method-call.java meta.method.java",
        "meta.require.ruby",
        "string.other.link.title.markdown",
        "support.function.funchand.php",
        "support.function.console.js",
        "support.function.dom",
        "support.function.go",
        "support.function.json.ts",
        "support.function.math",
        "support.function.misc.scss",
        "support.function.misc.css"
    ],
    settings: {
        foreground: colors.tokens.blue
    }
};

const greens = {
    name: "Green",
    scope: [
        "constant.character.literal.scala",
        "entity.other.inherited-class.php",
        "markup.fenced_code.block.markdown",
        "markup.inline.raw.markdown",
        "markup.inserted.diff",
        "meta.diff.header.to-file",
        "punctuation.definition.string",
        "source.sql.embedded.php",
        "string.quasi.js",
        "string.quoted.double",
        "string.quoted.single",
        "string.unquoted"
    ],
    settings: {
        foreground: colors.tokens.green
    }
};

const node = {
    "name": "Node",
    "scope" : [
        "support.module.node.js",
        "support.type.object.node.js",
        "support.type.object.process.js",
        "variable.language.ruby"
    ],
    "settings": {
        "foreground": colors.token.node
    }
};

const darkOrange = {
    name: "Orange Dark",
    scope: [
        "constant.language",
        "constant.language.php",
        "entity.name.goto-label.php",
        "constant.numeric",
        "constant.other.class.php",
        "constant.other.php",
        "entity.other.attribute-name",
        "entity.other.attribute-name.attribute.scss",
        "entity.other.attribute-name.localname.xml",
        "entity.other.attribute-name.pseudo-class.css",
        "entity.other.attribute-name.pseudo-element.css",
        "keyword.other.unit.scss",
        "meta.at-rule.include.scss",
        "meta.diff.range.unified",
        "meta.attribute.rust",
        "meta.set.variable.scss",
        "punctuation.definition.constant",
        "support.constant.ext.php",
        "support.constant.font-name",
        "support.constant.json",
        "support.constant.math",
        "support.constant.media.css",
        "support.constant.property-value",
        "support.constant.std.php",
        "support.type.object.console.js",
        "variable.other.constant",
        "variable.other.property"
    ],
    settings: {
        foreground: colors.tokens.darkOrange
    }
};

const lightOrange = {
    name: "Orange Light",
    scope: [
        "constant.other.database-name.sql",
        "constant.numeric.sql",
        "constant.other.table-name.sql",
        "entity.name.class",
        "entity.name.import.scala",
        "entity.name.package",
        "entity.name.type",
        "entity.name.type.class",
        "entity.name.type.module",
        "entity.name.type.namespace.cs",
        "entity.name.type.new.js",
        "entity.other.attribute-name.class.css",
        "entity.other.inherited-class",
        "meta.tag.sgml.doctype.html",
        "storage.modifier.import.java",
        "storage.modifier.package.java",
        "storage.type.cs",
        "storage.type.java",
        "storage.type.php",
        "storage.type.primitive",
        "support.class",
        "support.constant.core",
        "support.other.namespace.php",
        "support.other.namespace.use.php",
        "support.variable.dom",
        "support.variable.property",
        "tag.decorator entity.name.tag",
        "variable.import.scala",
        "variable.other.alias.yaml",
        "variable.other.class.js"
    ],
    settings: {
        foreground: colors.tokens.lightOrange
    }
};

const purples = {
    name: "Purple",
    scope: [
        "keyword.control",
        "keyword.control.anchor.regexp",
        "keyword.control.at-rule.font-face.css",
        "keyword.control.at-rule.function.scss",
        "keyword.control.at-rule.import.scss",
        "keyword.control.at-rule.include.scss",
        "keyword.control.at-rule.media.css",
        "keyword.control.at-rule.media.scss",
        "keyword.control.at-rule.mixin.scss",
        "keyword.control.class.ruby",
        "keyword.control.conditional",
        "keyword.control.def.ruby",
        "keyword.control.export.ts",
        "keyword.control.flow",
        "keyword.control.for.scss",
        "keyword.control.import.include.php",
        "keyword.control.loop",
        "keyword.control.module",
        "keyword.control.pseudo-method.ruby",
        "keyword.control.return.scss",
        "keyword.control.ruby",
        "keyword.control.shell",
        "keyword.control.start-block.ruby",
        "keyword.declaration",
        "keyword.function.go",
        "keyword.import.go",
        "keyword.operator.error-control.php",
        "keyword.operator.js",
        "keyword.operator.or.regexp",
        "keyword.other.alias.sql",
        "keyword.other.class.cs",
        "keyword.other.data-integrity.sql",
        "keyword.other.DDL.create.II.sql",
        "keyword.other.DML.sql",
        "keyword.other.fn.rust",
        "keyword.other.function.use.php",
        "keyword.other.import",
        "keyword.other.import.static",
        "keyword.other.namespace.cs",
        "keyword.other.namespace.php",
        "keyword.other.new",
        "keyword.other.new.php",
        "keyword.other.order.sql",
        "keyword.other.package.java",
        "keyword.other.phpdoc.php",
        "keyword.other.rust",
        "keyword.other.scoping.scala",
        "keyword.other.use.php",
        "keyword.other.using.cs",
        "keyword.other.where.rust",
        "keyword.package.go",
        "keyword.struct.go",
        "keyword.type",
        "punctuation.definition.entity.begin.bracket.square.css",
        "punctuation.definition.entity.end.bracket.square.css",
        "punctuation.definition.group.regexp",
        "punctuation.section.function.css",
        "punctuation.section.scope.elixir",
        "storage.modifier",
        "storage.class.std.rust",
        "storage.type",
        "storage.type.class",
        "storage.type.extends.js",
        "storage.type.function.js",
        "storage.type.namespace.ts"
    ],
    settings: {
        foreground: colors.tokens.purple
    }
};

const darkRed = {
    name: "Red Dark",
    scope: [
        "punctuation.section.embedded.begin",
        "punctuation.section.embedded.end",
        "variable.interpolation.scss"
    ],
    settings: {
        foreground: colors.tokens.darkRed
    }
};

const lightRed = {
    name: "Red Light",
    scope: [
        "beginning.punctuation.definition.list.markdown",
        "constant.other.object.key.js",
        "constant.other.object.key.js string.unquoted",
        "constant.other.reference.link.markdown",
        "entity.name.section.markdown",
        "entity.name.tag",
        "entity.name.val.declaration",
        "entity.name.variable.field.cs",
        "entity.name.variable.local.cs",
        "entity.name.variable.parameter.cs",
        "markup.deleted.diff",
        "markup.heading.setext",
        "meta.class.java meta.class.body.java meta.method.java meta.method.body.java",
        "meta.definition.variable.name.java",
        "meta.diff.header.from-file",
        "meta.object-literal.key",
        "meta.set.variable punctuation.separator.key-value.scss",
        "meta.type_params.rust",
        "punctuation.definition.heading.markdown",
        "punctuation.definition.variable.shell",
        "source.js meta.instance.constructor",
        "string.quoted.double.sql.php",
        "string.quoted.single.sql.php",
        "support.type.object.dom.js",
        "support.type.property-name.json",
        "variable.css",
        "variable.scss",
        "variable.argument.css",
        "variable.object.property.ts",
        "variable.other.assignment.go",
        "variable.other.block.ruby",
        "variable.other.bracket.shell",
        "variable.other.class.php",
        "variable.other.declaration.scala",
        "variable.other.dollar",
        "variable.other.global.php",
        "variable.other.global.safer.php",
        "variable.other.loop.shell",
        "variable.other.normal.shell",
        "variable.other.object",
        "variable.other.php",
        "variable.other.positional.shell",
        "variable.other.property.static.js",
        "variable.other.readwrite",
        "variable.other.special.shell",
        "variable.package.scala",
        "variable.parameter"
    ],
    settings: {
        foreground: colors.tokens.lightRed
    }
};

const cyans = {
    name: "Cyan",
    scope: [
        "constant.character.escape",
        "constant.other.symbol",
        "constant.other.symbol.hashkey punctuation.definition.constant",
        "keyword.control.new.java",
        "keyword.operator.address.go",
        "keyword.operator.arithmetic",
        "keyword.operator.assignment",
        "keyword.operator.assignment.augmented",
        "keyword.operator.bitwise.php",
        "keyword.operator.comparison",
        "keyword.operator.decrement.go",
        "keyword.operator.increment.go",
        "keyword.operator.increment-decrement",
        "keyword.operator.logical",
        "keyword.operator.logical.and.media.css",
        "keyword.operator.logical.php",
        "keyword.operator.misc.rust",
        "keyword.operator.new",
        "keyword.operator.other.elixir",
        "keyword.operator.relational",
        "keyword.operator.scala",
        "keyword.operator.sigil.rust",
        "keyword.operator.ternary.js",
        "meta.diff.index.git",
        "meta.tag.sgml.html punctuation.definition.tag.html",
        "punctuation.definition.tag.js",
        "storage.type.accessor.js",
        "storage.type.annotation.java",
        "string.regexp.js",
        "string.regexp.single-quoted.php",
        "string.regexp.double-quoted.php",
        "support.function.array.php",
        "support.function.basic_functions.php",
        "support.function.bcmath.php",
        "support.function.builtin",
        "support.function.classobj.php",
        "support.function.construct.output.php",
        "support.function.construct.php",
        "support.function.core.rust",
        "support.function.curl.php",
        "support.function.datetime.php",
        "support.function.dir.php",
        "support.function.errorfunc.php",
        "support.function.file.php",
        "support.function.gmp.php",
        "support.function.hash.php",
        "support.function.iconv.php",
        "support.function.image.php",
        "support.function.info.php",
        "support.function.intl.php",
        "support.function.js",
        "support.function.json.php",
        "support.function.ldap.php",
        "support.function.magic.php",
        "support.function.math.php",
        "support.function.mhash.php",
        "support.function.mutator.js",
        "support.function.mysql.php",
        "support.function.openssl.php",
        "support.function.output.php",
        "support.function.password.php",
        "support.function.pgsql.php",
        "support.function.php_apache.php",
        "support.function.php_imap.php",
        "support.function.php_mssql.php",
        "support.function.php_pcre.php",
        "support.function.php_spl.php",
        "support.function.mail.php",
        "support.function.network.php",
        "support.function.session.php",
        "support.function.std.rust",
        "support.function.streamsfuncs.php",
        "support.function.string.php",
        "support.function.ts",
        "support.function.url.css",
        "support.function.url.php",
        "support.function.var.php",
        "support.type.class.flowtype",
        "support.type.object.module.js keyword.operator.accessor.js",
        "support.type.object.module.js keyword.operator.accessor.js support.type.object.module.js",
        "support.type.primitive",
        "support.type.vendored.property-name.css",
        "source.css.scss keyword.control.operator"
    ],
    settings: {
        foreground: colors.tokens.cyan
    }
};

const grays = {
    name: "Gray",
    scope: [
        "meta.class.body.java",
        "meta.definition.variable.java",
        "meta.method.body.java",
        "meta.method.identifier.java",
        "punctuation.definition.method-parameters.begin.java",
        "punctuation.definition.method-parameters.end.java",
        "punctuation.definition.parameters.begin.bracket.round.scss",
        "punctuation.definition.parameters.end.bracket.round.scss",
        "punctuation.separator.key-value.js",
        "punctuation.terminator.java"
    ],
    settings: {
        foreground: colors.tokens.gray
    }
};

const illegal = {
    name: "Invalid Illegal",
    scope: [
        "invalid.illegal",
        "invalid.illegal.scss"
    ],
    settings: {
        foreground: colors.tokens.illegal
    }
};

const italics = {
    name: "Italic",
    scope: "markup.italic",
    settings: {
        foreground: colors.tokens.purple,
        fontStyle: "italic"
    }
};

const bold = {
    name: "Bold",
    scope: "markup.bold",
    settings: {
        foreground: colors.tokens.darkOrange,
        fontStyle: "bold"
    }
},

const none = {
    name: "None",
    scope: "",
    settings: {
        foreground: colors.tokens.gray
    }
};

function getTokens () {
    return [
        comments,
        docComments,
        specials,
        blues,
        greens,
        node,
        darkOrange,
        lightOrange,
        purples,
        darkRed,
        lightRed,
        cyans,
        grays,
        illegal,
        italics,
        none
    ]
}

module.exports = {
    getTokens
}