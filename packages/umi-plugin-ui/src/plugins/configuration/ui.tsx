import { IUiApi } from 'umi-types';
import ConfigManager from './ui/index';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

export default (api: IUiApi) => {
  api.addLocales({
    'zh-CN': zhCN,
    'en-US': enUS,
  });
  api.addPanel({
    title: 'org.umi.ui.configuration.panel',
    path: '/configuration',
    icon: {
      type: 'control',
      theme: 'filled',
    },
    component: () => <ConfigManager api={api} />,
  });
};
