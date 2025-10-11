import type { ReactNode } from "react"

export type Link = {
    text: string,
    link: string
}

export type Project = {
    images: string[],
    title: string,
    description: string,
    technologies: string[],
    myParticipation: string,
    links: Link[]
}

export type NavButton = {
    text: string,
    children: ReactNode
    target: string
}
