import React, { Component } from 'react';
import { toJS } from 'mobx';
import { inject, observer } from 'mobx-react';
import Tag from 'antd/lib/tag';
import isEmpty from 'lodash/isEmpty';
import map from 'lodash/map';

import { TagsTableWrapper } from './PageList.styles';

import Button from '../Button';
// import Tag from '~/Uapp/components.v2/molecules/Tag';

const createDefaultTags = (filter) => {
  return map(filter, (value, field) => ({
    component: Tag, // SimpleTag => <Tag>{value}</Tag>
    value,
    id: field,
  }));
};

@inject('listStore')
@observer
class PageListTags extends Component {
  static defaultProps = {
    createTags: createDefaultTags,
  }
  render() {
    const {
      createTags,
      listStore,
    } = this.props;

    if (!listStore.search &&
      (!listStore.filter || isEmpty(listStore.filter))
    ) return null;
    return (
      <TagsTableWrapper >
        {createTags(toJS(listStore.filter)).map((config, index) => {
          //  console.log({ config });
          const { component, ...tagProps } = config;
          const TagItem = component || Tag;
          return (
            <TagItem
              key={index}
              closable
              color="blue"
              {...tagProps}
              onClose={(tag) => {
                listStore.removeTag(tag);
              }}
            >
              {tagProps.value}
            </TagItem>
          );
        })}
        <Button
          size="small"
          paint="primary"
          view="text"
          bordered
          rounded
          onClick={listStore.clearFilter}
        >
          Снять все фильтры
        </Button>
      </TagsTableWrapper>
    );
  }
}

export default PageListTags;
