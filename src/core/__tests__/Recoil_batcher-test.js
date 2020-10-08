/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * @flow strict-local
 * @format
 */
'use strict';

import {unstable_batchedUpdates} from 'ReactDOM';

import {batchUpdates, getBatcher, setBatcher} from '../Recoil_Batching';

/**
 * Cleanup function that will reset the batcher back
 * to ReactDOM's resetBatcherToDefault.
 *
 * Call this at the end of a test that calls setBatcher
 * to maintain test purity.
 */
const resetBatcherToDefault = () => {
  setBatcher(unstable_batchedUpdates);
};

describe('batcher', () => {
  test('default batcher is ReactDOM unstable_batchedUpdates', () => {
    expect(getBatcher()).toEqual(unstable_batchedUpdates);
  });

  test('setBatcher sets the batcher function', () => {
    const batcherFn = jest.fn();
    setBatcher(batcherFn);

    expect(getBatcher()).toEqual(batcherFn);

    resetBatcherToDefault();
  });

  test('batchUpdates calls the batcher', () => {
    const batcherFn = jest.fn();
    setBatcher(batcherFn);

    batchUpdates(() => {});
    expect(batcherFn).toHaveBeenCalledTimes(1);

    resetBatcherToDefault();
  });
});