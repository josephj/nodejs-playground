import {server} from 'universal-webpack';
import settings from './universal-webpack-settings';
import configuration from './webpack.config'

server(configuration, settings);

