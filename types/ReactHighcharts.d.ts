import * as React from 'react';
import * as Highcharts from 'highcharts';

declare namespace ReactHighcharts {
  export interface ReactHighchartsProps extends React.HTMLProps<ReactHighcharts> {
    config: Highcharts.Options;
    callback?: (chart: ReactHighcharts) => void;
    domProps?: object;
  }
}
declare class ReactHighcharts extends React.Component<ReactHighcharts.ReactHighchartsProps> { }
export = ReactHighcharts;
