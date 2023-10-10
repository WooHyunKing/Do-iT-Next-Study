import React from "react";

const PostId = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  return <div>{params.id}</div>;
};

export default PostId;
