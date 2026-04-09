type imageCard = {
  imgUrl: string;
  title: string;
  author: string;
};
function BookListCard({ imgUrl, title, author }: imageCard) {
  return (
    <div className="flex items-center justify-start gap-3">
      <img src={imgUrl} alt="" className="h-[50px] w-[50px]" />
      <div>
        <h4 className="text-sm text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600">{author}</p>
      </div>
    </div>
  );
}

export default BookListCard;
