export interface Member {
  id: number
  name: string
  backgroundColor: string
  role: string
  avatar: string
}

export interface TeamSection {
  heading: string
  members: Member[]
}
