export interface TweetInterface {
  _id: string;
  text: string;
  userNickName: string;
  userName: string;
  userImgUrl: string;
  times: number;
  viewed: boolean;
  approved: boolean;
  hashtag: string;
}
