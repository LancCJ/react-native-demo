/**
 * Recipe Tabs Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as MainActions from '@redux/main/actions';

// The component we're mapping to
import MainRender from './MainView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  meals: state.recipe.meals,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  getMeals: MainActions.getMeals,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainRender);
