import numpy as np

def calculate_risk_score(applicant_data):
    # 1. Define your weights based on the model output
    weights = {
        'BankruptcyHistory': -0.288415,
        'EducationLevel': 0.116310,
        'CheckingAccountBalance': -0.064490,
        'CreditScore': 0.063276,
        'MaritalStatus': 0.036130,
        'LengthOfCreditHistory': -0.034482,
        'SavingsAccountBalance': 0.034116,
        'TotalAssets': -0.031308,
        'LoanAmount': -0.029865,
        'HomeOwnershipStatus': -0.028488,
        'MonthlyIncome': 0.026531,
        'EmploymentStatus': -0.018965,
        'Age': 0.014741,
        'NumberOfDependents': 0.008665,
        'Experience': -0.007436,
        'LoanDuration': -0.004000
    }
    
    # 2. Calculate the "Logit" (Weighted Sum)
    # We assume applicant_data is a dictionary with the same keys
    logit = 0
    for feature, weight in weights.items():
        # Get value from applicant, default to 0 if missing
        value = applicant_data.get(feature, 0)
        logit += (value * weight)
    
    # 3. Apply the Sigmoid function: 1 / (1 + e^-z)
    # This maps any number to a range between 0 and 1 (Probability)
    risk_probability = 1 / (1 + np.exp(-logit))
    
    return risk_probability

# --- Example Usage ---
# NOTE: These values MUST be scaled (standardized) for the math to be correct
test_profile = {
    'BankruptcyHistory': 0.5, # Example scaled value
    'EducationLevel': -1.2,
    'CreditScore': 1.1,
    # ... add all other features
}

score = calculate_risk_score(test_profile)
print(f"Calculated Risk: {score * 100:.2f}%")