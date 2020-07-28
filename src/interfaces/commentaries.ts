import { ImageSourcePropType } from 'react-native';

export interface CommentProps {
  id: number;
  avatar: ImageSourcePropType;
  author: string;
  content: string;
}

export interface CommentListProps {
  data: CommentProps[];
}
