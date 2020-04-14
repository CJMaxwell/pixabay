import React from 'react';

const ImageCard = ({ image }) => {
  // console.log(image);
  const tags = image.tags.split(', ');
  return (
    <div className="max-w-sm mx-auto overflow-hidden shadow-lg rounded">
      <div className="w-full">
        <img src={ image.webformatURL } alt={image.type} className="h-48 w-full object-cover" />
      </div>
      <div className="py-6 px-4">
        <h1 className="text-purple-500 text-xl font-bold mb-2">Photo by {image.user}</h1>
        <ul>
          <li><strong>Views: </strong>{image.views}</li>
          <li><strong>Downloads: </strong>{image.downloads}</li>
          <li><strong>Likes: </strong>{image.likes}</li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 mt-2 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
