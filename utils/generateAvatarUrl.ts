export const generateAvatarUrl = (name: string) => {
  const formattedName = name.replace(' ', '+');
  return `https://ui-avatars.com/api/?name=${formattedName}`;
};