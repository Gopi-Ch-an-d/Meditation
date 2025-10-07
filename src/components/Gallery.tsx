import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Plus } from 'lucide-react';

interface Image {
  id: number;
  url: string;
  title: string;
}

const DynamicGallery: React.FC = () => {
  const [images, setImages] = useState<Image[]>([
    {
      id: 1,
      url: 'https://media.istockphoto.com/id/1483989816/photo/adult-arab-male-with-a-ponytail-meditating-in-a-yoga-class.jpg?s=612x612&w=0&k=20&c=FTkO8dit_ZWB_9mUk2bmkELm2mpC-NqH82nCmK1Wx6M=',
      title: 'Mountain Vista'
    },

    {
      id: 2,
      url: 'https://t3.ftcdn.net/jpg/03/13/43/10/360_F_313431040_algVlD8qiQnikswKKOSuLVRTFhzd2IrS.jpg',
      title: 'Forest Path'
    },

    {
      id: 3,
      url: 'https://plus.unsplash.com/premium_photo-1664910461298-d47622d62ebd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjB5b2dhfGVufDB8fDB8fHww',
      title: 'Sunset Waves'
    },

    {
      id: 4,
      url: 'https://media.istockphoto.com/id/1474629602/photo/woman-doing-yoga-with-group-in-fitness-studio-standing-in-stretching-asana-mukha-shvanasana.jpg?s=612x612&w=0&k=20&c=YPw5YM2Rj70sGsU-3kdhDDermFh0SfozcYRaXUkt698=',
      title: 'City Lights'
    },

    {
      id: 5,
      url: 'https://media.yogauonline.com/app/uploads/2023/02/27161758/5._how_to_practice_together_in_a_group_yoga_class.png',
      title: 'Misty Valley'
    },

    {
      id: 6,
      url: 'https://media.yogauonline.com/app/uploads/2023/02/27161733/2._group_yoga_class_can_create_feelings_of_balance_and_harmony_in_the_group.png',
      title: 'Blooming Nature'
    },

    {
      id: 7,
      url: 'https://nutritionsource.hsph.harvard.edu/wp-content/uploads/2021/11/pexels-yan-krukov-8436601-copy-1024x768.jpg',
      title: 'Pounch'
    },
    {
      id: 8,
      url: 'https://extension.usu.edu/createbetterhealth/images/10benefitsofyoga.jpg',
      title: 'Hand'
    },
    {
      id: 9,
      url: 'https://vikasa.com/wp-content/uploads/2024/08/RAW09580-scaled.jpg',
      title: 'Pounches'
    }
  ]);

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [newImageUrl, setNewImageUrl] = useState<string>('');
  const [newImageTitle, setNewImageTitle] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const addImage = (): void => {
    if (newImageUrl.trim()) {
      const newImage: Image = {
        id: Date.now(),
        url: newImageUrl,
        title: newImageTitle || 'Untitled'
      };
      setImages([...images, newImage]);
      setNewImageUrl('');
      setNewImageTitle('');
      setShowAddForm(false);
    }
  };

  const removeImage = (id: number, e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    setImages(images.filter(img => img.id !== id));
  };

  const openLightbox = (image: Image): void => {
    setSelectedImage(image);
  };

  const closeLightbox = (): void => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'next' | 'prev'): void => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br bg-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 font-serif">
            Our Gallery
          </h1>
          <p className="text-purple-700 text-lg">Click images to explore • Add your own memories</p>
        </div>

        {/* Add Image Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            Add Image
          </button>
        </div>

        {/* Add Image Form */}
        {showAddForm && (
          <div className="max-w-md mx-auto mb-8 p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl animate-slide-down">
            <h3 className="text-xl font-bold text-white mb-4">Add New Image</h3>
            <input
              type="text"
              placeholder="Image URL"
              value={newImageUrl}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewImageUrl(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Image Title (optional)"
              value={newImageTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewImageTitle(e.target.value)}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-purple-300 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="flex gap-3">
              <button
                onClick={addImage}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
              >
                Add
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Gallery Grid */}
       <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((image: Image, index: number) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(image)}
            >
              <div className="aspect-square relative overflow-hidden bg-slate-800">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg">{image.title}</h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={(e: React.MouseEvent<HTMLButtonElement>) => removeImage(image.id, e)}
                  className="absolute top-4 left-4 p-2 bg-red-500/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={() => navigateImage('next')}
              className="absolute right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div className="max-w-5xl max-h-[90vh] px-20">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl animate-scale-in"
              />
              <h2 className="text-white text-2xl font-bold text-center mt-6 animate-fade-in">
                {selectedImage.title}
              </h2>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out backwards;
        }

        .animate-slide-down {
          animation: slide-down 0.4s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default DynamicGallery;