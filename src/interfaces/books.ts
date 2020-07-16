export interface BookProps {
  id: number;
  author: string;
  title: string;
  genre?: string;
  publisher?: string;
  year?: string;
  image?: string | null;
}

export interface BookListProps {
  data: BookProps[];
}
