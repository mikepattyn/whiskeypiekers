// Import redux types
import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

// Import Character Typing
import { ICharacter, ICharacterState } from '../../Reducers/CharacterReduser';

// Create Action Constants
export enum CharacterActionTypes {
  GET_ALL = 'GET_ALL',
}

// Interface for Get All Action Type
export interface ICharacterGetAllAction {
  type: CharacterActionTypes.GET_ALL;
  characters: ICharacter[];
}

/* 
Combine the action types with a union (we assume there are more)
example: export type CharacterActions = IGetAllAction | IGetOneAction ... 
*/
export type CharacterActions = ICharacterGetAllAction;

export interface FixedHeightStill {
  url: string;
  width: string;
  height: string;
}

export interface OriginalStill {
  url: string;
  width: string;
  height: string;
}

export interface FixedWidth {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface FixedHeightSmallStill {
  url: string;
  width: string;
  height: string;
}

export interface FixedHeightDownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
}

export interface Preview {
  width: string;
  height: string;
  mp4: string;
  mp4_size: string;
}

export interface FixedHeightSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface DownsizedStill {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface Downsized {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface DownsizedLarge {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface FixedWidthSmallStill {
  url: string;
  width: string;
  height: string;
}

export interface PreviewWebp {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface FixedWidthStill {
  url: string;
  width: string;
  height: string;
}

export interface FixedWidthSmall {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface DownsizedSmall {
  width: string;
  height: string;
  mp4: string;
  mp4_size: string;
}

export interface FixedWidthDownsampled {
  url: string;
  width: string;
  height: string;
  size: string;
  webp: string;
  webp_size: string;
}

export interface DownsizedMedium {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface Original {
  url: string;
  width: string;
  height: string;
  size: string;
  frames: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface FixedHeight {
  url: string;
  width: string;
  height: string;
  size: string;
  mp4: string;
  mp4_size: string;
  webp: string;
  webp_size: string;
}

export interface Looping {
  mp4: string;
  mp4_size: string;
}

export interface OriginalMp4 {
  width: string;
  height: string;
  mp4: string;
  mp4_size: string;
}

export interface PreviewGif {
  url: string;
  width: string;
  height: string;
  size: string;
}

export interface Images {
  fixed_height_still: FixedHeightStill;
  original_still: OriginalStill;
  fixed_width: FixedWidth;
  fixed_height_small_still: FixedHeightSmallStill;
  fixed_height_downsampled: FixedHeightDownsampled;
  preview: Preview;
  fixed_height_small: FixedHeightSmall;
  downsized_still: DownsizedStill;
  downsized: Downsized;
  downsized_large: DownsizedLarge;
  fixed_width_small_still: FixedWidthSmallStill;
  preview_webp: PreviewWebp;
  fixed_width_still: FixedWidthStill;
  fixed_width_small: FixedWidthSmall;
  downsized_small: DownsizedSmall;
  fixed_width_downsampled: FixedWidthDownsampled;
  downsized_medium: DownsizedMedium;
  original: Original;
  fixed_height: FixedHeight;
  looping: Looping;
  original_mp4: OriginalMp4;
  preview_gif: PreviewGif;  }

export interface Onload {
  url: string;
}

export interface Onclick {
  url: string;
}

export interface Onsent {
  url: string;
}

export interface Analytics {
  onload: Onload;
  onclick: Onclick;
  onsent: Onsent;
}

export interface Data {
  type: string;
  id: string;
  slug: string;
  url: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  title: string;
  _score: number;
  analytics: Analytics;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export class RootObject {
  data: Data[];
  pagination: Pagination;
  meta: Meta;
  results: any
}
/* Get All Action
<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const getAllCharacters: ActionCreator<
  ThunkAction<Promise<any>, ICharacterState, null, ICharacterGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get('https://swapi.co/api/vehicles/');
      if(response.status != 200)
        return
      if(response.data){
        const results = response.data.results as Array<object>
        for(var key in results){
          var character = results[key] as ICharacter
          const response2 = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9bGDQphEqGXeSGMEchp29vPKcsqucSgO&q=${character.name}&limit=1&offset=0&rating=G&lang=nl`)
          if(response2.status == 200){
            if(response2.data){
              const results2 = response2.data.data[0].images.original_mp4.mp4
              character.url = results2
            }
          }
          // for(var object in data){
          //   console.log(object)
          // }
        }
      }
      
      // for (var result in response.data.results) {
      //   var o = JSON.parse(result) as ICharacter
      //   console.log(result)
      //   const responseSearch:RootObject = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=9bGDQphEqGXeSGMEchp29vPKcsqucSgO&q=${o.name}&limit=1&offset=0&rating=G&lang=nl`) as unknown as  RootObject
      //   var array = responseSearch.data as any
      //   // o.url = array.data[0].images.preview_gif.url
      // }


      dispatch({
        characters: response.data.results,
        type: CharacterActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};