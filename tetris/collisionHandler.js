function rectCollision(firstRect, secondRect) {
  let {r1x, r1y, r1w, r1h} = {r1x: firstRect.x, r1y: firstRect.y, r1w: firstRect.w, r1h: firstRect.w};
  let {r2x, r2y, r2w, r2h} = {r2x: secondRect.x, r2y: secondRect.y, r2w: secondRect.w, r2h: secondRect.w};

  return (
    r1x + r1w - collisionMargin >= r2x &&
    r1x <= r2x + r2w - collisionMargin &&
    r1y + r1h >= r2y &&
    r1y <= r2y + r2h - collisionMargin
  )
}