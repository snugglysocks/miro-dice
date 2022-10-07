async function RollDie() {
  
  await miro.board.ui.on("drop", async ({ x, y, target}) => {
    const shapes = {4:"triangle",6:"rectangle",8:"trapezoid",10:"pentagon",12:"hexagon",20:"octagon"}

    const dieSize = target.id;
    const dieShape = shapes[dieSize];
    const randomNumber = Math.floor(Math.random() * dieSize) + 1;
    const userName = await miro.board.getUserInfo();
  
    try {
      const Die = await miro.board.createShape({
        x,
        y,
        content: ranmdomNumber.toString(),
        shape: dieShape,
      });
    } catch (error) {
      console.log(error);
      window.alert(
        "Drag and drop failed"
      );
    }
  });

};

RollDie();
