# Time Series Forecasting without Exogenous Variables using PyCaret

This directory contains a Jupyter notebook demonstrating time series forecasting without exogenous variables using PyCaret, a low-code machine learning library in Python.


## Notebook Contents

The notebook in this directory covers:

- Setting up PyCaret for time series forecasting
- Loading and preprocessing a univariate time series dataset (different from the official PyCaret examples)
- Training and comparing multiple time series forecasting models
- Model evaluation and interpretation
- Making future predictions

## How to Run

1. Ensure you have PyCaret installed (`pip install pycaret`)
2. Open the Jupyter notebook in this directory
3. Run the cells sequentially

Note: The notebook is set up to use GPU if available (`use_gpu=True` in the setup function).

## Dataset

The dataset used in this notebook is [Population time series](https://www.kaggle.com/datasets/census/population-time-series-data/data) from [Kaggle]. It was chosen to demonstrate univariate time series forecasting 

## Video Tutorial

A comprehensive video tutorial explaining this notebook and its outputs is available at [LINK_TO_VIDEO].

## Additional Notes

- This implementation uses full AutoML capabilities of PyCaret for univariate time series forecasting.
- The code has been rewritten and is not a direct copy from PyCaret examples to ensure originality.
