import loquat from '@loquat/simple'

enum TermType {
  Abs = "Abstract",
  App = "Apply",
  Var = "Variable"
}

type AST = {
  ASTType: TermType,
}

type AbsAST = {
  ASTType: TermType,
  name: string,
  term: AST
}

type AppAST = {
  ASTType: TermType,
  term1: AST,
  term2: AST[]
}

type VarAST = {
  ASTType: TermType,
  name: string
}

const space = loquat.oneOf("\r\n\t ").label("")

const lexeme = (parser: any) => parser.skipMany(space)

const term: any = loquat.lazy(() => loquat.choice([applyTerm.try(), simpleTerm.try(), absTerm])).label("term")

const parenTerm = lexeme(loquat.qo(function* () {
  yield lexeme(loquat.char("("))
  const t = yield term
  yield lexeme(loquat.char(")"))
  return t
})).label("paren")

const applyTerm = lexeme(loquat.qo(function* () {
  const fn = yield simpleTerm
  const arg = yield simpleTerm.many1()
  return { ASTType: TermType.App, term1: fn, term2: arg }
})).label("apply")

const simpleTerm = loquat.lazy(() => loquat.choice([parenTerm.try(), varTerm])).label("simple term")

const varTerm = lexeme(loquat.qo(function* () {
  const name = yield loquat.letter
  return { ASTType: TermType.Var, name: name }
})).label("var")

const absTerm = lexeme(loquat.qo(function* () {
  yield lexeme(loquat.char("$"))
  const x = yield loquat.letter
  yield lexeme(loquat.char("."))
  const t = yield term
  return { ASTType: TermType.Abs, name: x, term: t }
})).label("abstract")

const parser = loquat.spaces.and(term).left(loquat.eof)

export const parse = (src: string) => {
  const result = loquat.parse(parser, "", src)
  if (result.success) {
    console.log(result.value)
    return result.value
  }
  else {
    alert(result.error.toString())
    return false
  }
}
