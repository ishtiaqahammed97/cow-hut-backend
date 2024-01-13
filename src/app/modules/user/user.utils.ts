import { Users } from './user.model';

export const findLastUserId = async (): Promise<string | undefined> => {
  const lastUser = await Users.findOne({ role: 'users' }, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean();

  return lastUser?.id ? lastUser.id.substring(4) : undefined;
};

export const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0');

  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  return incrementedId;
};

// export const findLastBuyerId = async (): Promise<string | undefined> => {
//   const lastBuyer = await User.findOne({ role: 'buyer' }, { id: 1, _id: 0 })
//     .sort({
//       createdAt: -1,
//     })
//     .lean();

//   return lastBuyer?.id ? lastBuyer.id.substring(4) : undefined;
// };

// export const generateBuyerId = async (buyer): Promise<string> => {
//   const currentId =
//     (await findLastBuyerId()) || (0).toString().padStart(5, '0');

//   const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

//   return incrementedId;
// };
