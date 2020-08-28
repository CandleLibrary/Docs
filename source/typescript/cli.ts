/**[README;API]:brief
 * 
 * **cfw.Docs** is a documentation generator for CandleFW libraries. It is used to
 * create the README, CONTRIBUTION, and CODE_OF_CONDUCT and API documentation for 
 * all CandleFW repositories, and also serves as the central repository for the 
 * CandleFW hosted documentation. 
 * 
 * Docs runs as a stand alone application that can process documentation for individual 
 * CandleFW libraries or build documentation for all libraries at once. It can also be used 
 * to build a documentation site outside the repo for personal use. Additionally, any 
 * repo based on Typescript or Javascript that follows the *CFW Repo Organization Pattern* 
 * can take advantage of cfw.Docs to auto-generate documentation.
 */


import { getProcessArgs, xtF, xtColor, xtReset, col_x11, xtBold } from "@candlefw/wax";
