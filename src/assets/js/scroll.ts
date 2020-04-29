export class scroll {
  constructor() {}

  public scrollIt(destination, callback): void {
    const documentHeight = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.clientHeight,
      document.documentElement.scrollHeight,
      document.documentElement.offsetHeight
    );
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset =
      typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll =
      Math.round(
        documentHeight - destinationOffset < windowHeight
          ? documentHeight - windowHeight
          : destinationOffset
      ) - 100;
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }
}
