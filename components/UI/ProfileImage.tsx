const ProfileImage = ({
  displayPhoto,
}: {
  displayPhoto: string | undefined;
}) => {
  const placeholderImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL0AAACUCAMAAADxqtj8AAAANlBMVEX29vawsLDj4+Otra37+/uzs7O5ubnz8/Oqqqrv7+/e3t7s7Oy2trbb29vY2Ni9vb3Ozs7IyMjak0bTAAAD7ElEQVR4nO2c25qrIAxGOYSKgiDv/7IbWjudaW0rBw3sj/925mIRQwghKSFdXV1FBUHYEAkK2INiQWokja1hYMZqQW8Swi7ziI20T0DUbKmU9LeklJeFDbV/ASDMCc7pq7ik1oxV8wOzdAt9XQDXS8U7QFn5Fn11IW4GbMpNwbCI93Z/8FtVoflB2R3swX+EqQ4f5s29um1+V5v3mG8e/9d76gr/y27D37zHKmziX4qE9/i6GuvDEuM2leGDibX8Fb+SrcsS2AP+gg0eNOoU03vJCT/ug0uE98cWuu8AS4UPro9t/OGSDO/xJ2T6pHjzQ29xfWfYmZq9w2eo9HP8OfWHXmN6PuzJ6D9JYhpf5ZkeN+ykx/ofIaY7g86FpxTtwIXEDOe38LKdtOTyiR4v5Oe7vRfWLSvzqLoJLWaqApuWSoNEn5FePoQW8VnuWYVKn5nkrPQWBz6uAvWWXrRMT3XL9I3b/oJE3/aubTtiFkgxQ5KJRN92ptB2llYkQxZYGXLbt5O2b4Z5RcxVeGXwlCefJ2E+AOVXo7CifRCkvpvcJVFfPjMTNdwqbOMVcDJnwSO/Pnjj5+Bjv/yAavnVjYBL3bgVvHhmbFw5o5vei4nvpFumr+Kln8DUcpdFWofLpRJ4r2h8Lippz7mq6c6uyBd/6WqyfNDUckcjgXFvN6muIs6/aFcnL6+ykzdIOfmFX4q5Oq/50ZcOdiqwCmd7xZzenh7g1M7VTz94/5mdkH9dSIbBh/onN1YNyljtzX0V1XaZagvwnxVGlsZReY1Do1NXpFXurq6uRnQNMoOPlGG6c1oVBj194Kw6At1mUs3inF3nO/n9uKJUaGudWwxTQ5VLUNNiRchm+JtrCr/+jQrr5oquhRCmaUNms/dm7v9TOMNGgv8NgASbf0vrXz+ET9vchJu2ASgXkrFI9HUBPn1zDG8TjPMl2ujPn0AblOwTRqOL9Ihoc/pFF8iyfYVKwOd6OXcDDxHzqLsWcOLEs797l2S/8lt2lvlN7rzGFr44p5y/t2YWzX9CZRbYAYZf8fnR3gPTYfChWnVshbNEP9FH/iPH/aFM/+gHyeP2LszHWj6IH1bpLNJ/+VUHvf6roufrW/Fj0p6D4vwLvT4ga4Do30xIxj9g557j9Df84q5fpGt3L33pd/QzguVDsvChBSeye/Gy8Icfsk/0Zds0s7rPElTS80u0S0eqZHvyabH+Lu7KwZ8ZLlddypV5MroWU1WwS7bIYFWcyg3TnJfiPFSu07TAzybE09ti9Jfz6ano9J2+03f6Tt/pO32n7/SdvtN3+k7f6Tt9p+/0yfTnF2EL0hOGoVLwXV3/m/4BqkM+zAHhdyYAAAAASUVORK5CYII=`;
  return (
    <img
      className="rounded-full h-[30px] lg:h-[40px] object-cover border"
      src={displayPhoto ? displayPhoto : placeholderImage}
      alt="profile-pic"
    />
  );
};

export default ProfileImage;
