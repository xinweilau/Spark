/**
 * This file is used to create a single instance of Tailwind
 * which respects the configuration specified in tailwind.config.js
 */
import { create } from 'twrnc';

const tw = create(require(`../../tailwind.config.js`));

export default tw;
