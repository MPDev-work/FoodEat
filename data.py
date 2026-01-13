import pandas as pd
import numpy as np
from scipy import stats

# Set seed for reproducibility
np.random.seed(42)

# Generate data
n_per_group = 150
group1 = np.random.normal(loc=50, scale=10, size=n_per_group)
group2 = np.random.normal(loc=53, scale=10, size=n_per_group)

# Create DataFrame
df = pd.DataFrame({
    "Group": ["A"] * n_per_group + ["B"] * n_per_group,
    "Score": np.concatenate([group1, group2])
})

# Save CSV
file_path = "Downloads/independent_t_test_300_samples.csv"
df.to_csv(file_path, index=False)

# Perform independent samples t-test
t_stat, p_value = stats.ttest_ind(group1, group2)

file_path, t_stat, p_value
