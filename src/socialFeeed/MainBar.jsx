import React, { useEffect, useState, useRef, useCallback } from "react";
import { Card, CardHeader, CardBody, CardFooter, Avatar, Button } from "@heroui/react";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { Spinner } from "@heroui/react";

function PostCard() {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  // Track whether user has liked each anime
  const [userLikes, setUserLikes] = useState({});
  // Track total like count for each anime
  const [likeCounts, setLikeCounts] = useState({});

  const fetchAnime = async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}&limit=10`);
      const data = await res.json();
      if (!data.data || data.data.length === 0) {
        setHasMore(false);
        return;
      }
      setAnimeList((prev) => [...prev, ...data.data]);
      setPage((prev) => prev + 1);

      // Initialize states for new items
      const newUserLikes = {};
      const newLikeCounts = {};
      data.data.forEach(anime => {
        newUserLikes[anime.mal_id] = false; 
        newLikeCounts[anime.mal_id]  = 0;    
      });
      

      setUserLikes(prev => ({ ...prev, ...newUserLikes }));
      setLikeCounts(prev => ({ ...prev, ...newLikeCounts }));
    } catch (err) {
      console.error("Error fetching anime:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(); // first load
  }, []);

  const lastAnimeRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          fetchAnime();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Handle like toggle — one user, one like, one count
  const handleLike = (mal_id) => {
    setUserLikes(prev => ({
      ...prev,
      [mal_id]: !prev[mal_id] // toggle user like state
    }));

    setLikeCounts(prev => ({
      ...prev,
      [mal_id]: prev[mal_id] + (userLikes[mal_id] ? -1 : 1) // adjust count based on previous state
    }));
  };

  if (!animeList.length && loading)
    return <p className="text-white text-center mt-10">Loading anime...</p>;

  return (
    <>
      {animeList.map((anime, index) => {
        const isLast = animeList.length === index + 1;
        const isLiked = userLikes[anime.mal_id] || false;
        const likeCount = likeCounts[anime.mal_id] || 0;

        return (
          <Card
            key={anime.mal_id}
            ref={isLast ? lastAnimeRef : null}
            className="w-full max-w-3xl mx-auto bg-black-mood-second-color rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300 mb-6"
          >
            {/* Header */}
            <CardHeader className="flex items-center gap-3">
              <Avatar
                src={anime.images.jpg.image_url}
                isBordered
                color="primary"
                size="lg"
              />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-black-mood-second-text-color">
                  {anime.title}
                </h4>
                <p className="text-xs text-gray-500">
                  Score: {anime.score ?? "N/A"}
                </p>
              </div>
            </CardHeader>

            {/* Body */}
            <CardBody className="mt-3">
              <p className="text-black-mood-text-color text-sm line-clamp-3">
                {anime.synopsis || "No description available."}
              </p>

              {/* Anime Image */}
              <div className="mt-3 w-full h-64 overflow-hidden rounded-xl">
                <img
                  src={anime.images.jpg.large_image_url}
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </CardBody>

            {/* Footer */}
            <CardFooter className="flex justify-between mt-3">
              <Button
                variant="light"
                size="sm"
                startContent={
                  <FiHeart
                    className={isLiked ? "text-red-500 fill-current" : ""}
                  />
                }
                onPress={() => handleLike(anime.mal_id)}
                className={`text-xl  ${isLiked ? "text-red-500" : "text-black-mood-second-text-color"} hover:text-red-500`}
              >
               
                {likeCount > 0 && `Like`}

                {likeCount}
              </Button>
              <Button
                variant="light"
                size="sm"
                startContent={<FiMessageCircle />}
                className="text-black-mood-second-text-color hover:text-blue-500 text-xl"
              >
                Comment
              </Button>
              <Button
                variant="light"
                size="sm"
                startContent={<FiShare2 />}
                className="text-black-mood-second-text-color hover:text-green-500 text-xl"
              >
                Share
              </Button>
            </CardFooter>
          </Card>
        );
      })}

      {loading && (
        <p className="text-center text-gray-400 my-4 text-4xl">
          <Spinner />
        </p>
      )}
      {!hasMore && <p className="text-center text-gray-500 my-4"><b>No more anime</b></p>}
    </>
  );
}

export default PostCard;