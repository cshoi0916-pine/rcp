import type {FC, DetailedHTMLProps, HTMLAttributes, HtmlHTMLAttributes} from "react"
import {makeClassName} from "./textUtil"

type TextProps = DetailedHTMLProps<
  HtmlHTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TitleProps = TextProps & {
  numberOfLines?: number
}
export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-bold text-5xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SubtitleProps = TitleProps & {}
export const Subtitle: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-semibold text-3xl text-center whitespace-pre-line",
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SummaryProps = TitleProps & {}
export const Summay: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "text-sm whitespace-pre-line",
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type ParagraphProps = TitleProps & {}
export const Paragraph: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    "font-normal text-base whitespace-pre-line",
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}
