type imageCard = {
  imgUrl: string;
};
function BookListCard({ imgUrl }: imageCard) {
  return (
    <div className="flex items-center justify-start gap-3">
      <img src={imgUrl} alt="" className="h-[50px] w-[50px]" />
      <div>
        <h4 className="text-sm text-gray-900">Digital Minimalism</h4>
        <p className="text-xs text-gray-600">Cal Nawport</p>
      </div>
    </div>
  );
}

export default BookListCard;
