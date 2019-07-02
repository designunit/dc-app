// type Media = String
// type Color = String
type Unit = String

export interface ICode {
    id: string
    alias?: string

    // collections: any[]
    // extends: ICode
    title: string
    code: string[]
    keywords: Set<string>
    // description: string
    // comment: string
    // block: boolean
    // unit: Unit
    // image: string
    // cad_color: Color
    // cad_linetype: 'continuous | hidden | dashed'
    // cad_lineweight: Number
    // pattern_name: string
    // pattern_file: Media
    // pattern_scale: Number
    // pattern_rotation: Number
    // pattern_lineweight: Number
    // pattern_color_foreground: string
    // pattern_color_background: string
}

export interface ICategory {
    id: number,
    prefix: string,
    name: string,
    counter: number,
    priority: number,
    childrenTags?: ICode[],
}
