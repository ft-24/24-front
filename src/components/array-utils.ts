export type NotificationProps = {
	index: number,
	text: string,
}

export const remove = (arr: NotificationProps[], item: NotificationProps) => {
  const newArr = [...arr];
  newArr.splice(newArr.findIndex(i => i.index === item.index), 1);
  return newArr;
};

let newIndex = 0;
export const add = (arr: NotificationProps[], newItem: NotificationProps) => {
  newIndex++;
	newItem.index = newIndex;
  return [...arr, newItem];
};
