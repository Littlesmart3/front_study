import { get, post, remove } from './index';

export const getShopCategories = () => get({ url: '/api/v2/project_ai/goods_categories' });
