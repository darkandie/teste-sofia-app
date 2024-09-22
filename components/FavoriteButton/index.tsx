import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { database } from '../../db/database'; 
import { Q } from '@nozbe/watermelondb';
import { Favorite } from '../../db/models/favorite'; 
import Ionicons from '@expo/vector-icons/Ionicons';

interface FavoriteButtonProps {
  post: {
    postId: string;
    userId: string;
    title: string;
    body: string;
  };
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ post }) => {
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  useEffect(() => {
    const checkIfFavorited = async () => {
      try {
        const favorite = await database.collections
          .get<Favorite>('favorites') 
          .query(Q.where('post_id', post.postId))
          .fetch();

        if (favorite.length > 0) {
          setIsFavorited(true);
        }
      } catch (error) {
        console.error("Error checking if favorited", error);
      }
    };

    checkIfFavorited();
  }, [post.postId]);

  const handleFavorite = async () => {
    try {
      await database.write(async () => {
        if (isFavorited) {
          const favoriteRecord = await database.collections
            .get<Favorite>('favorites')
            .query(Q.where('post_id', post.postId))
            .fetch();
            console.log(favoriteRecord, 'favoriteRecord')  

          if (favoriteRecord.length > 0) {
            await favoriteRecord[0].destroyPermanently(); 
            setIsFavorited(false); 
            Alert.alert("Post adicionado aos favoritos!")
          }
        } else {
          await database.collections.get<Favorite>('favorites').create((favorite) => {
            favorite.postId = Number(post.postId); 
            favorite.userId = Number(post.userId);
            favorite.title =  post.title;
            favorite.body = post.body;
          });
          setIsFavorited(true); 
          Alert.alert("Post adicionado aos favoritos!")
        }
      });
    } catch (error) {
      console.error("Error handling favorite", error);
    }
  };

  return (
    <TouchableOpacity onPress={handleFavorite}>
      {!isFavorited ? 
        <Ionicons 
          size={20}
          name="star-outline"
        /> :
        <Ionicons 
          size={20}
          name="star"
          color={"#F3c830"}
        />
      }
    </TouchableOpacity>
  );
};

export default FavoriteButton;
