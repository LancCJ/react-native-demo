/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import Error from '@components/general/Error';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

import Main from '@containers/main/MainContainer';


const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>

      <Scene
          {...navbarPropsTabs}
          key={'main'}
          title={'主页'}
          icon={props => TabIcon({ ...props, icon: 'home' })}>
          <Scene
              {...navbarPropsTabs}
              key={'mainPage'}
              component={Main}
              title={'首页'}
              analyticsDesc={'Recipes: Main Page'}
          />
      </Scene>

      <Scene
          key={'models'}
          {...navbarPropsTabs}
          title={'Example Error'}
          component={Error}
          icon={props => TabIcon({ ...props, icon: 'dashboard' })}
          analyticsDesc={'Error: Example Error'}
      />

      <Scene
          key={'oragin'}
          {...navbarPropsTabs}
          title={'Example Error'}
          icon={props => TabIcon({ ...props, icon: 'dashboard' })}
      >
          <Scene
              {...navbarPropsTabs}
              key={'recipes'}
              title={'Recipes'}
              icon={props => TabIcon({ ...props, icon: 'search' })}>
              <Scene
                  {...navbarPropsTabs}
                  key={'recipesListing'}
                  component={Recipes}
                  title={AppConfig.appName}
                  analyticsDesc={'Recipes: Browse Recipes'}
              />
              <Scene
                  {...AppConfig.navbarProps}
                  key={'recipeView'}
                  component={RecipeView}
                  getTitle={props => ((props.title) ? props.title : 'View Recipe')}
                  analyticsDesc={'RecipeView: View Recipe'}
              />
          </Scene>

          <Scene
              key={'error'}
              {...navbarPropsTabs}
              title={'Example Error'}
              component={Error}
              icon={props => TabIcon({ ...props, icon: 'error' })}
              analyticsDesc={'Error: Example Error'}
          />

          <Scene
              key={'styleGuide'}
              {...navbarPropsTabs}
              title={'Style Guide'}
              component={StyleGuide}
              icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
              analyticsDesc={'StyleGuide: Style Guide'}
          />
      </Scene>
      </Scene>


);

export default scenes;
